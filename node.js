require('dotenv').config()
const express = require('express'),
      path    = require('path'),
      q = require("q"),
      bodyParser = require('body-parser'),
      mysql = require('mysql');



 // app 
const app = express();


// db connection 
var pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONLIMIT
    //debug: true
})




app.get("/", (req, res)=>{ 
    res.status(200).json({name : 'name'});
});







// listening 

const PORT = process.env.PORT || process.env.arg[2] || 3000 ; 

app.listen(PORT, ()=>{
    console.log(`Listening to server at ${PORT}`);
});