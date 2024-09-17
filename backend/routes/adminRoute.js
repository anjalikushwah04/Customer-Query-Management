const express = require('express');
const Admin=require('../models/admin');
const { Query } = require('mongoose');
const adminRoute=express.Router();

adminRoute.post('/', async (req, res) => {
    const {email, password } = req.body;
    try {
        const existingEmp = await Admin.findOne({ email: email } );
        if (existingEmp) {
            return res.status(400).send({ msg: "Email already exists" });
        } else {
            const result = await Admin.create({
                email: email,
                password: password
            })
            return res.send({ msg: "success" })
        }
    }

    catch (err) {
        console.log(err);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
})
adminRoute.post('/adlogin',async(req,res)=>{
    const {email,password}=req.body
    const admin=await Admin.findOne({email:email})
    if(admin){
        if(admin.password==password){
            return res.send({msg:"success",id:admin._id})
        }
        else{
            console.log("error")
            return res.send({msg:"Invalid password"})
        }

    }else{
        return res.send({msg:"User not exist"})
    }
   
})

adminRoute.get('/adminDashboard/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Admin.findById(id);
    return res.send(result)
})
adminRoute.post('/editadmindetails/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Admin.findByIdAndUpdate(id,req.body);
    return res.send({msg:"success",result:result})
})






module.exports=adminRoute;
