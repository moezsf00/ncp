const express=require('express')
const port=7896
const app=express()
const {x,khaoula,anas,sum}=require("./test")

const date=new Date()
const value=date.toString().split("T")
const day=(value[0].split(" ")[0])
const time=(value[0].split(" ")[4].toString().slice(0,2))
console.log(time)
app.get("/",(req,res)=>{
  if(time>=11 && time<=18){
    res.send("We are open",{data:[{name:"anas",age:3}]})
  }
    res.send("We are close")
})

app.listen(port,()=>{
    console.log("server is running http://localhost:"+port)
})
module.exports={
     x:5,
     khaoula:6,
     anas:7,
     sum:(x,khaoula)=>{
        console.log(x+khaoula)
     }

}