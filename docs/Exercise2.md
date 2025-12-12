# 📘 README — Crea una pantalla de inicio de sesión

En este apartado vamos a crear una pantalla de login para nuestra app, controlado a través de tokens JWT.

## Diseño

Mi pantalla tiene un aspecto básico para el test de la app.

![alt text](image-3.png)

Al hacer click a "Entrar" llama a un método que válida los inputs `(email y pswd)`. Una vez son validados, llama a la api:

```js
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!validator.isEmail(email)) {
      Alert.alert("Error", "El email no es válido.");
      return;
    }
    if (!validator.isStrongPassword(password)) {
      Alert.alert("Error", "La contraseña no es segura!!!");
      return;
    }

    try {
      const token = await authApiService.loginUser(email, password);

      if (token == "" || token == null) {
        Alert.alert("Error", `Not logged, invalid user or password.`);
        return;
      }

      console.log("User Token:", token);

      await authStorageService.saveToken(token);
      Alert.alert("Succesful", `Logeado\n Mastodonte Crack Titán Guapo!`);

      setEmail("");
      setPassword("");

      router.push("./(drawer)/welcome");
    } catch (error) {
      console.log(error);
    }
  };
```

Al llamar a la api, recojo la información que me devuelve el endpoint y compruebo que me ha devuelto el token para confirmar si ha sido correcto el login.

---

Para enviar los datos al endpoint de la api, me he creado un tipo en mis `/api_types/ApiTypes.ts` para decir que esos son los datos que envío.

```js
const userData: LoginData = {
  email,
  pswd: password,
};
```


---

Luego, controlo la respuesta de la api,

```js
try {
  const token = await authApiService.loginUser(email, password);

  if (token == "" || token == null) {
    Alert.alert("Error", `Not logged, invalid user or password.`);
    return;
  }

  console.log("User Token:", token);

  await authStorageService.saveToken(token);
  Alert.alert("Succesful", `Logeado\n Mastodonte Crack Titán Guapo!`);

  setEmail("");
  setPassword("");

  router.push("./(drawer)/welcome");
} catch (error) {
  console.log(error);
}
```

Al llamar a la api, compruebo que me ha devuelto un token o no, sino me ha devuelto un token, es que hubo un error en el logeo. Acto seguido, muestro por consola el token y lo guardo en el AuthStorage. Finalmente, le redirijo a la pantalla de welcome.tsx

![alt text](image-4.png)

![alt text](image-5.png)

---

Al logearnos correctamente, para comprobar lo que nos devuelve, abrimos el Postman y comprobamos las respuestas del endpoint.

![alt text](image-8.png)

Aqui podemos comprobar que un logeo exitoso nos devuelve el token, userId y el código. Al logearnos exitosamente, guardamos el token en nuestro almacenamiento local para la sesión.

```js
if (token == "" || token == null) {
  Alert.alert("Error", `Not logged, invalid user or password.`);
  return;
}

console.log("User Token:", token); // Imprime el token (Logeo exitoso)

await authStorageService.saveToken(token);
Alert.alert("Succesful", `Logeado\n Mastodonte Crack Titán Guapo!`);

setEmail("");
setPassword("");

router.push("./(drawer)/welcome");
} catch (error) {
console.log(error);
}    
```

Al ser el login exitoso (compruebo que el token exista para ver si fue exitoso), guardamos el token en nuestro almacenamiento y redirigimos al usuario a la pantalla Welcome.

![alt text](image-9.png)

---

Otro posible resultado es que ya al haber introducido correctamente los datos, la petición sale errónea.

![alt text](image-6.png)

Para comprobar este error hay que ver lo que devuelve el endpoint de la api. Para ello vamos a ir al Postman y ver que posibles resultados hay.

![alt text](image-7.png)

Al tener ya previamente creada la cuenta, y nos intentamos logear y es erróneo el login, vemos que no nos devuelve el cuerpo de un login exitoso.

```js
if (token == "" || token == null) {
  Alert.alert("Error", `Not logged, invalid user or password.`);
  return;
}
```

Entonces, para comprobar que el login no ha sido exitoso, comprobamos si la petición devuelve el token, sino es que no ha sido exitoso.

---

## Uso de AsyncStorage para almacenar el token

Este servicio utiliza @react-native-async-storage/async-storage para guardar el token de sesión de forma persistente en el dispositivo móvil. Esto permite que el usuario permanezca autenticado aunque cierre la app.

Funcionalidades implementadas

- Guardar token

```js
const saveToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.log(error);
  }
};

// Para llamarlo

await authStorageService.saveToken(token);
```

Guarda el token recibido tras un login exitoso en el almacenamiento interno.

- Obtener token

```js
const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Para llamarlo

const token = await authStorageService.getToken();
```

Recupera el token almacenado para usarlo en peticiones autenticadas.

- Eliminar token

```js
const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.log(error);
  }
};

// Para llamarlo

await authStorageService.removeToken();
```

```js
export const authStorageService = {
  saveToken, 
  getToken,
  removeToken
}
```

Borra el token del almacenamiento al cerrar sesión.

[Volver](../README.md)
