# 📘 README — Cierre de sesión

Para cerrar la sesión del usuario, he creado un botón en la pantalla welcome. Este botón es simple, llama al service del AuthStorage y borra el token proporcionado por la Api / Servidor. Luego, redirecciono a LoginScreen.

```js
const logOff = async () => {
  await authStorageService.removeToken();
  router.replace("/LoginScreen");
};
```


[Volver](../README.md)