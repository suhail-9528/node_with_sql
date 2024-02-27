
const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true})); 
app.use(express.json())
const port =3000;


app.get("/register",(req,res)=>{
  // console.log(req.query,"hello world")
  let {user,password}=(req.query);
  // console.log({user}); 
  res.send(`registered Get request Welcome ! :${user} `)
});
  

app.post("/register",(req,res)=>{ 
// let {user,password}=req.body;
console.log(req.body)
  res.send("registered Post request!")
});

app.listen(port,()=>{
  console.log(` listen on the port ${port}`);
});