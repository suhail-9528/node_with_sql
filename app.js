




const { faker } = require('@faker-js/faker');
 const mysql=require("mysql2");
 const express=require("express");
 const app=express();
 const port=3000;
 const path=require("path");
 var methodOverride = require('method-override');


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(methodOverride('_method'));

 const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:"mohd@123"
});
// const fakerinbulk=()=>{
//   return  [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email()  
//   ];
  // console.log(fakerData());
  // };
 
//   let qe="INSERT INTO user5 (userId,username,email) values ?";

//   let data=[];
// for(let i=1; i<=100; i++){
//    data.push(fakerinbulk());
// // console.log(fakerinbulk());
// };



// let qe="alter table user5 drop column registeredAt";
// try {
  
// connection.query(qe,[data],(err,result)=>{
//   if(result){
//     console.log(result);
//   }
// });
// } catch (error) {
// console.log(error)
// };
// console.log(fakerinbulk());
// let q=fakerinbulk();
app.get("/",(req,res)=>{
  let q="SELECT count(*)FROM user5";
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err
      // console.log(result[0]["count(*)"]);
      console.log(result[0])
      // res.send(" I AM VERY HAPPY!");
      // res.send(result[0]);
      let fakedata=result[0]["count(*)"];   
      res.render("home.ejs",{fakedata});
    })
  } catch (error) {
console.log(error);
res.send(" i am not happy!");
  }
});
//  show rought 
app.get("/user",(req,res)=>{

  let q="select * from user5 limit 10";
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err
      let userdata=result;
      // console.log(result)
      res.render("showuser.ejs",{userdata});
    })
  } catch (error) {
console.log(error);
res.send(" i am not happy!");
  }
});
// add route 
app.post("/user/add",(req,res)=>{
  let q="insert into user5 (userId,username,email) values ?";
  res.render("adduserdata.ejs");
});
app.get("/user/:id/edit",(req,res)=>{
 let {id}=req.params;
  let q=`select * from user5 where userId='${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err
       // console.log(result)
       let user=result[0]
    res.render("edit.ejs",{user});
  });
  } catch (error) {
console.log(error);
res.send(" <h1>you not edit form!</h1>");
  }
});
//  update route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let q=`select * from user5 where userId='${id}'`;
  let {userId:Id,usename:name}=req.body;

  try {
    connection.query(q,(err,result)=>{
      if(err) throw err
       let user=result[0];
       if(Id !=user.userId){
        res.send("wrong userId!");
       };
       res.send("error");
  });
  }catch(error){
    console.log(error)
  }
})

app.listen(port,()=>{console.log("listen server success!",port)})

// connection.end();