const express = require('express');
const User = require('../models/user')
const userRoute = express.Router();

userRoute.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (user) {
        if (user.password == password) {
            return res.send({ msg: "success", id: user._id,user:user })
        }
        else {
            console.log("error")
            return res.send({ msg: "Invalid Password" })
        }

    } else {
        return res.send({ msg: "User not exist" })
    }

})
userRoute.post('/reset', async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email: email })
    if(user){
        return res.send({msg:"success",user:user});

    } else {
        return res.send({ msg:"User not exist" })
    }

})

userRoute.post('/resetpassword/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { password}=req.body;
                const user = await User.findByIdAndUpdate(id, {password}, { new: true });
        if (user) {
            return res.send({ msg: "success",user });
        } else {
            return res.send({ msg: "User not exist" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
});

userRoute.post('/registration', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
        const existingEmp = await User.findOne({ email: email } );
        if (existingEmp) {
            return res.status(400).send({ msg: "Email already exists" });
        } else {
            const result = await User.create({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
            return res.send({ msg: "success",result:result })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
})
userRoute.post(`/edituserdetails/:id`,async(req,res)=>{
    const id = req.params.id;
    const result=await User.findByIdAndUpdate(id,req.body)
    return res.send({msg:"success",result:result});
})
userRoute.get('/currentuser/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const result = await User.findById(id);
        return res.send(result)
        }catch(err){
            return res.send({msg:"failed"})
        }
   
})
userRoute.get('/viewalluser',async(req,res)=>{
    try{
        const userData=await User.find();
        return res.send({msg:"success",userData:userData})
        }catch(err){
            return res.send({msg:"failed"})
        }
    // const id=req.params.id;
    
})
userRoute.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const result = await User.findById(id);
        return res.send(result)
        }catch(err){
            return res.send({msg:"failed"})
        }
   
})
userRoute.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await User.findByIdAndUpdate(id, req.body);
    return res.send({ msg: "success" })
})
userRoute.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await User.findByIdAndDelete(id, req.body);
    return res.send({ msg: "success" })
})

module.exports = userRoute;
