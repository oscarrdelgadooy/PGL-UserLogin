# UD2 – Práctica 3 – UserLogin

PGL-UserLogin es una **aplicación móvil** desarrollada en **React Native** con **Expo Router** que permite a los usuarios:

- Registrarse con nombre completo, email y contraseña.
- Iniciar sesión y mantener su sesión mediante un **token JWT**.
- Acceder a una pantalla de bienvenida protegida.
- Cerrar sesión y eliminar su token de sesión.
- Interactuar con una API que valida usuarios y tokens.

El objetivo del proyecto es practicar la **autenticación de usuarios**, el manejo de **AsyncStorage** y la comunicación con APIs REST desde React Native.

---

## Instalación

1. Clonar el repositorio desde GitHub:

```bash
git clone https://github.com/tu-usuario/PGL-UserLogin.git
```

2. Entrar en el directorio del proyecto:

```bash
cd PGL-UserLogin
```

3. Instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución

1. Inicia el proyecto con Expo:

```bash
npm run start
```

## Estructura principal del proyecto.
```
PGL-UserLogin/
│
├─ app/
│  ├─ (drawer)/welcome.tsx     
│  └─ register.tsx 
│
├─ services/
│  └─ api.ts  
│
├─ types/
│  ├─ CartProduct.ts  
│  ├─ Producto.ts
│  └─ api_types/
│     └─ RegisterType.ts 
│
├─ package.json
└─ README.md
```

## Flujo de la aplicación

1. Registro: el usuario introduce sus datos, se valida el email y la contraseña, se envían a la API y se muestra el resultado.

2. Login: el usuario introduce email y contraseña, se valida y se envía a la API; si es correcto, se guarda el token en AsyncStorage.

3. Pantalla de bienvenida: accesible solo si hay token; incluye botón que llama al endpoint de bienvenida.

4. Cierre de sesión: elimina el token y redirige al login.

## Tipos de datos

* `api_types/RegisterType.ts` → define la estructura de los datos necesarios para el registro (`fullname`, `email`, `pswd`).

## Ejercicio 1:

[Ejercicio 1](docs/Exercise1.md)

### Ejercicio 2:

[Ejercicio 2](docs/Exercise2.md)

### Ejercicio 3

[Ejercicio 3](docs/Exercise3.md)

### Ejercicio 4

[Ejercicio 4](docs/Exercise4.md)

### Ejercicio 5

[Ejercicio 5](docs/Exercise5.md)
