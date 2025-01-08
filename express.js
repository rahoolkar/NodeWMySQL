const express = require("express");
const app = express();
const path = require("path");
const mysql = require('mysql2');
var methodOverride = require('method-override');

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
app.use(methodOverride('_method'))

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

app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params;
    let query = `SELECT * FROM student WHERE id = "${id}"`;

    try{
        connection.query(query,(error,result)=>{
            if(error) throw error;
            let node = result[0];
            res.render("edit.ejs",{node});
        })
    }catch(error){
        console.log(error);
    }
    
})

app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    let {username:newu,password:upassword}=req.body;
    let query = `SELECT * FROM student WHERE id = "${id}"`;

    try{
        connection.query(query,(error,result)=>{
            if(error) throw error;
            let node = result[0];
            console.log(node);
            if(node.password == upassword){
                let query2 = `UPDATE student SET username = "${newu}" WHERE id = "${id}"`;
                
                try{
                    connection.query(query2,(error,result)=>{
                        if(error) throw error;
                        res.redirect("/user");
                    })
                }catch(error){
                    console.log(error);
                }
            }else{
                res.send("Wrong password");
            }
        })
    }catch(error){
        console.log(error);
    }
    
    
})