const mysql = require("mysql2");

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"mydb",
    password:"rahul@2002"
})

let data = ["1","rahul123","rahul@gmail.com","abc"];

let query = "INSERT INTO student (id,username,email,password) VALUES (?,?,?,?)";

try{
    connection.query(query,data,(error,result)=>{
        if(error) throw error;
        console.log(result);
    })
}catch(error){
    console.log(error);
}

connection.end();