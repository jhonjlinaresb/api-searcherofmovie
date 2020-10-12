### API-Rest Searcher of Movies

Installation:

> npm init -y
> npm install express mysql2 sequelize

Create ```
app.js
```
> sequelize init


make sure that `
config.json
`

Contains the correct auth config for your mysql service sequelize 
> model:generate --name Movie --attributes title:string,poster_path:string,overview:text,release_date:date,vote_average:float

#### Structure of database
![](C:\Users\Jhon\Pictures\dbstructure.png)

Create Database:
> sequelize db:create
> sequelize db:migrate
> sequelize db:seed:all

It is important to have the correct data in `
config.json
`
for the configuration with the database:

![](C:\Users\Jhon\Pictures\configjson.JPG)

Check in the database MySQL Workbench

![](C:\Users\Jhon\Pictures\dbapi.JPG)
