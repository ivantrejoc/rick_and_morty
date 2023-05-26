const express = require("express");
const router = require("./routes");
const server = express();
const PORT = 3001;
const { conn } = require('./DB_connection');

server.use((req, res, next) => {                             //middlewares, propuestos por el readme
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');    // siempre van antes de server.listen
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());     //middleware que convierte todo el json a objeto
server.use("/rickandmorty", router); //middleware

server.listen(PORT, ()=>{
  console.log("Server raised at port: "+ PORT);
})

