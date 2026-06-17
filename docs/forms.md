# Formularios

## Formulario principal

La aplicación incluye un formulario para registrar nuevos juegos en la colección.

## Campos

### Título

Nombre del videojuego.

### Plataforma

Plataforma donde se juega el videojuego.

Opciones:

* PC
* PlayStation
* Xbox
* Nintendo

### Estado

Estado actual del videojuego.

Opciones:

* PENDIENTE
* JUGANDO
* COMPLETADO
* ABANDONADO

## Gestión del estado

El formulario utiliza useState para almacenar el valor de cada campo.

## Validación

Se verifica que el título no esté vacío antes de enviar la información.

## Comunicación con la API

Los datos se envían mediante una petición POST al backend utilizando el cliente API tipado.
