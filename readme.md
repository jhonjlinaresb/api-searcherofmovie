<p align="center">
    <h3>This is a REDME of API</h3>	
</p>

# Quick start

## Run the backend
- Convert .env.example to .env

- npm install

- npx nodemon app.js

## DB

- sequelize db:create
- sequelize db:migrate

- sequelize db:seed:all

importante: cambiar la configuración de MySQL para permitir mayor max_allowed_packet en my.ini
en windows es: C:\xampp\mysql\bin\my.ini 

sino desde el terminal de MySQL
mysql -u root
seteamos:
set global max_allowed_packet=1000000000;
