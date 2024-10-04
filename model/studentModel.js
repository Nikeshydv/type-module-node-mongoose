import mongoose from "mongoose";

const stuSchema=new mongoose.Schema({

    rollno:Number,
    name:String,
    city:String,
    fees:Number

})

const stuModel=mongoose.model("student",stuSchema);
export default stuModel;