# emailByMe

Es una aplicacion para practicar tanto frontend como un poco de backend con herramientas sencillas como:
- Angular
- Express
- Nodemailer

## Instalacion
- Clonar el Repositorio
- Instalar Dependencias Frontend: cd email-app && npm install
- Instalar Dependencias Backend: cd email-api && npm install
- Iniciar Aplicación Frontend: cd email-app && ng serve --open
- Iniciar Servidor Backend: cd email-api && nodemon index.js
- Crear un archivo en email-api con el nombre .env y escribir:
>- MAIL="El email desde donde se van a mandar mensajes"
>- PASS="Contraseña de aplicacion(al verificar en dos pasos, en el gmail de origen)"

La aplicación estará disponible en http://localhost:4200, y el servidor backend en http://localhost:3000. Corre localmente. 

Si no anda nodemon, instalarlo:
npm install -g nodemon
