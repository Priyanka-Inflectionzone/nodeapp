const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send("Welcome to nodeapp");
})

app.listen(3000,()=>{
    console.log("Application is running on port 3000");
})