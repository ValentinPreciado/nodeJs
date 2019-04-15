const express = require("express");
const app = express();
const path = require ("path");

//settings
app.set("port",3000);
app.set("view engine","ejs" );
//Middlewares

//Routes
app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "Views/index.html"));




});

//static files


//listening The server

   app.listen( app.get("port" ), () => {
     console.log("server on port"), app.get("port")

   });
  
 
