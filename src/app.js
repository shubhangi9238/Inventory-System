let express=require("express");  
let bodyParser=require("body-parser");
let db=require("../db.js");        
require("dotenv").config();
let app=express();   

module.exports=app;