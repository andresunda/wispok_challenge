# Evaluación Técnica - Live Coding

## Descripción del Proyecto

La aplicación es una lista de usuarios donde:

- Se puede crear n cantidad de usuarios con su nombre, avatar y ubicación.
- Se hace una llamada a una API para obtener el clima de esa ubicación del usuario.
- Se puede eliminar un usuario.
- Los datos se almacenan en el estado global utilizando Redux.
- El objetivo es resolver los errores presentados en el proyecto dentro de un límite de tiempo (45 minutos).

## Recursos a utilizar

- API_KEY: 7caf16fae451f622b301dc0cd6120040
- Documentación de la API: https://openweathermap.org/api/one-call-3

## 0. Evaluación Complementaria

### Git

- Tarea: Crear una rama, solucionar los errores y realizar un Pull Request.

### Qué se evaluara:

- Flujo de trabajo colaborativo en Git (crear ramas, realizar commits, abrir PR).
- Tiempo esperado: 3-5 minutos.

## Errores

## 1. Error en la API

- Problema: Cuando la aplicación hace una petición a la API de openweathermap aparece el siguiente error, se reviso la key, no se ha excedido el plan y es correcta de igual modo que la petición la contenga.

```json
{
  "cod": 401,
  "message": "Invalid API key. Please see https://openweathermap.org/faq#error401 for more info."
}
```

<details>
  <summary>Pista</summary>
  Revisa los campos que se mandan basándote en la documentación de la API.

[Documentación de la API](https://openweathermap.org/api/one-call-3)

</details>

### Qué se evaluara:

- No uso de la pista.
- Detectar el error.
- Uso de herramientas de debugging (ej. console.log, DevTools, etc.).
- Tiempo esperado: 5 minutos.

## 2. Los usuarios no se están guardando en el estado global

- Problema: Se detecto que la aplicación permite exitosamente guardar usuarios en el estado global, acceder a ellos y ver su información, pero al volver a la página de usuarios no se muestra ninguna información referente a ese nuevo usuario ingresado.

### Qué se evaluara:

- No se use la pista.
- Detectar el error en Redux.
- Comunicación efectiva para explicar el problema.
- Tiempo esperado: 5-7 minutos.

<details>
  <summary>Pista</summary>
  Revisa el estado inicial de los usuarios en el reducer "userSlice.ts".

</details>

## 3. Botón "Ingresar usuario" no funciona cuando se esta viendo la información de un usuario

- Problema: El botón "Ingresar usuario" no esta configurado para funcionar en otra pantalla que no sea la página de usuarios, por lo que lo que se desea es que el botón no se muestre en la pantalla información de usuarios o que funcione en la página de usuarios.

<details>
  <summary>Pista</summary>
  Revisa que componente permite que se muestre el modal.

</details>

### Qué se evaluara:

- No uso de la pista.
- Rápida ubicación del botón.
- Resolución de que condición se cumpla para que el botón no se muestre.
- Tiempo esperado: 7-10 minutos.

## 4. El formulario de Ingresar usuario me permite generar usuarios sin ingresar datos

- Problema: El sistema no debería permitir a los usuarios crear usuarios sin ingresar datos, todo el formulario debe ser obligatorio.

<details>
  <summary>Pista</summary>
  ¿Qué propiedad hace que un input sea obligatorio de llenar y en donde se debe utilizar?

</details>

### Qué se evaluara:

- No uso de la pista.
- Detectar el error de validación.
- Comunicación efectiva para reportar el problema.
- Tiempo esperado: 5-7 minutos.

## 5. Botón "Eliminar usuario" no funciona

- Problema: Al intentar eliminar un usuario, no se ejecuta la acción. No hay errores en la consola, pero no ocurre nada.

### Qué se evaluara:

- Detectar el error de validación.
- Comunicación efectiva para reportar el problema.
- Tiempo esperado: 3-5 minutos.

## 6. EXTRA: Desarrolla la funcionalidad de "Editar usuario"

- Problema: Actualmente no se permite editar un usuario, pero debería poder hacerlo, para ello esta preparado el icono de edición: "atoms/Icons/EditIcon.tsx". De ahi en más no tenemos nada desarrollado.
  Este icono deberá aparecer al lado del botón "Eliminar usuario" y deberá de ser un modal que permita editar el usuario, foto, nombre, etc.

### Qué se evaluara:

- Detectar que duplicar para acelerar el desarrollo.
- Comunicación efectiva para reportar el problema y la solución.
- Tiempo esperado: 10-15 minutos.
