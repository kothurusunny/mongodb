const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const studentRouters = require("./routes/StudentRoutes");
const app=express();

app.use(bodyParser.json());


mongoose.connect("mongodb://127.0.0.1:27017/6csn1")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));
//routers
app.use("/api",studentRouters);


app.listen(3000,()=>{
    console.log("Server running on post 3000");
});