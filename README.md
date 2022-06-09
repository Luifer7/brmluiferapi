# brmluiferapi
Sistema de productos, vistas, crud y rest api, hecha con node js.

Este sistema consta de dos partes, un login y registro con las vistas de un CRUD para crear, editar, 
y eliminar estos productos y una REST API para gestionar los productos.

modulos: ESM
dependencias: package.json
npm install
start node .

Desplegada en HEROKU: https://brmluifer.herokuapp.com/


API

GET ALL
/api/product

GET ONE
/api/product/:id

post
/api/product
{ "number": , "name": "", "price": , "stock": , "date": "" }

PUT
/api/product/:id
{ "number": , "name": "", "price": , "stock": , "date": "" }

DELETE
/api/product/:id




