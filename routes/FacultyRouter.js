const express=require("express");
const router=express.Router();
const Faculty=require("../models/Faculty");

//create
router.post("/faculty",async(req,res)=>{
    const faculty=new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});

//read
router.get("/faculty",async(req,res)=>{
    const faculty=await faculty.find();
    res.send(faculty);
});

module.exports=router;