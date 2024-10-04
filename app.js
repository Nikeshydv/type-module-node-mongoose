import express from "express";
const app=express();
import bodyParser from "body-parser";
import mongoose from "mongoose";


import route from "./route/studentRoutes.js";



mongoose.connect("mongodb://127.0.0.1:27017/vishakha").then(()=>{
    console.log("connected to database");
});

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/student",route);



app.listen(4000,()=>{
    console.log("server is running on port 4000");
})