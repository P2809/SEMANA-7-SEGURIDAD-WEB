# SEMANA 7 - Seguridad Web con Node.js y Express

## Objetivo

Implementar una aplicación web utilizando Node.js y Express aplicando autenticación, sesiones, cookies y control de acceso a rutas protegidas.

## Tecnologías Utilizadas

* Node.js
* Express
* Express Session
* HTML5
* Git
* GitHub
* Visual Studio Code

## Funcionalidades

* Inicio de sesión mediante usuario y contraseña.
* Creación de sesión autenticada.
* Uso de cookies para mantener el estado del usuario.
* Ruta protegida.
* Control de acceso.
* Registro de eventos en consola.
* Cierre de sesión.

## Usuario de Prueba

Usuario: admin

Contraseña: 1234

## Instalación

1. Abrir el proyecto en Visual Studio Code.
2. Ejecutar:

npm install

3. Iniciar el servidor:

node app.js

4. Abrir en el navegador:

http://localhost:3000

## Seguridad Implementada

### Autenticación

Se validan las credenciales del usuario antes de permitir el acceso al sistema.

### Sesiones

Se utiliza express-session para mantener la sesión activa del usuario.

### Cookies

Las cookies permiten identificar al usuario autenticado y mantener el estado entre solicitudes.

### Control de Acceso

La ruta privada solo puede ser visitada por usuarios autenticados.

### HTTPS

HTTPS protege la comunicación entre cliente y servidor mediante cifrado TLS. Las cookies pueden configurarse como HttpOnly y Secure para mejorar la seguridad.

## Evidencias

* Captura del login.
* Captura de acceso autorizado.
* Captura de acceso denegado.
* Captura de consola con eventos del sistema.

## Repositorio GitHub

https://github.com/P2809/SEMANA-7-SEGURIDAD-WEB
