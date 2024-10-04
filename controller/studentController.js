
 import stuModel from "../model/studentModel.js"
 class stuController{


    static stuInformation=(req,res)=>{
        res.send(" this is the student data")
    }


    static stuDisplay=(req,res)=>{
        res.send(" this is the display function")
    }


    static stuInsert= async(req,res)=>{
        const { rollno,name,city,fees}=req.body;
        const Data=await stuModel.create({
           rollno:rollno,
           name:name,
           city:city,
           fees:fees
        })

        res.send(Data);


       
    }

 }



export default stuController;