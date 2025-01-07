const mysql = require("mysql2");

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"mydb",
    password:"rahul@2002"
})

let query = "SHOW TABLES";

try{
    connection.query(query,(error,result)=>{
        if(error) throw error;
        console.log(result);
    })
}catch(error){
    console.log(error);
}

connection.end();