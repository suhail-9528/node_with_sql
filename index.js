
const { faker } = require('@faker-js/faker');
 const mysql=require("mysql2");


 const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app', 
  password:"mohd@123"
});
let q="insert into user1 (id,name) values ?";
let user=[92,"suhail"];
let users=[[122,"taasneem"],[123,"asaad"],[124,"amaan"]];
let create=" show databases";
let age="SELECT * FROM user2 WHERE userId NOT IN (22,23,24)";
let sele=["jj",24];
let createTable="select * from user5";
try {
 connection.query(createTable,(result,err)=>{  
  if (err) {
    console.log(err); 
  }; 
})
} catch (error) {
  console.log(error);

};connection.end();


const fakerData=()=>{
return  { 
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past()
};
// console.log(fakerData());
};
fakerData();


