const mysql = require("mysql2");
const { faker } = require('@faker-js/faker');

function userDataArray() {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password()
    ];
}

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"mydb",
    password:"rahul@2002"
});

let q = "INSERT INTO student(id,username,email,password) VALUES ?";
let users = [];
for(let i=1;i<=100;i++){
    users.push(userDataArray());
}

try{
    connection.query(q,[users],(error,result)=>{
        if(error)throw error;
        console.log(result);
    })
}catch(error){
    console.log(error);
}

connection.end();
