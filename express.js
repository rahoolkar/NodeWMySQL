const express = require("express");
const app = express();
const path = require("path");
const mysql = require('mysql2');

let port = 8080;

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"mydb",
    password:"rahul@2002"
})

app.listen(port,()=>{
    console.log("server is running on port 8080");
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    let query = "SELECT COUNT(id) FROM student";
    try{
        connection.query(query,(error,result)=>{
            if(error) throw error;
            console.log(result);
            let count = result[0]['COUNT(id)'];
            res.render("home.ejs",{count});
        })
    }catch(error){
        console.log(error);
    }
})

app.get("/user",(req,res)=>{
    let query = "SELECT id,username,email FROM student";
    try{
        connection.query(query,(error,result)=>{
            if(error) throw error;
            let users = result;
            res.render("show.ejs",{users});
        })
    }catch(error){
        console.log(error);
    }
})

