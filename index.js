//package used to create fake data 
const { faker } = require('@faker-js/faker');

//package used to form a connection between mysql database and node server 
const mysql = require('mysql2');

function createRandomUser() {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      password: faker.internet.password()
    };
}

function userDataArray() {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password()
    ];
}

console.log(createRandomUser());
console.log(userDataArray());

//starting a connection with the database and node server 
let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"mydb",
    password:"rahul@2002"
})

try{
    connection.query("DROP TABLE student",(error,result)=>{
        if(error) throw error;
        console.log(result);//result will return an array
    })
}catch(error){
    console.log(error);
}

//ending a connection between node and database
connection.end();