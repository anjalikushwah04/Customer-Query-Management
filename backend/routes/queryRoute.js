const express = require('express');
const queryRoute = express.Router();
const Query = require('../models/query')

queryRoute.post(`/addquery`, async (req, res) => {
    const query = req.body;
    const response = await Query.create(req.body)
    return res.send({ msg: "success", result: response });
})
queryRoute.post(`/edituserquery/:id`, async (req, res) => {
    const response = await Query.findByIdAndUpdate(id, req.body)
    return res.send({ msg: "success" });
})
queryRoute.post('/status/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Query.findByIdAndUpdate(id, req.body);
        // console.log(result);
        return res.send({ msg: "success" });
    } catch (error) {
        return res.send({ msg: error });
    }
})
queryRoute.get('/pendingquery', async (req, res) => {
    try {
        const result = await Query.find({ status: "pen" });
        return res.send({ msg: "success", result: result });
    } catch (error) {
        return res.send({ error: error.msg })
    }

})
queryRoute.get('/processingquery', async (req, res) => {
    try {
        const result = await Query.find({ status: "pro" });
        return res.send({ msg: "success", result: result });
    } catch (error) {
        return res.send({ error: error.msg })
    }

})
queryRoute.get('/completedquery', async (req, res) => {
    try {
        const result = await Query.find({ status: "com" });
        return res.send({ msg: "success", result: result });
    } catch (error) {
        return res.send({ error: error.msg })
    }

})
queryRoute.get('/allpendingquery', async (req, res) => {
    const result = await Query.find({ status: "pen" });
    return res.send({ msg: "success", result: result });
})
queryRoute.get('/allprocessingquery', async (req, res) => {
    const result = await Query.find({ status: "pro" });
    return res.send({ msg: "success", result: result });
})
queryRoute.get('/allcompletedquery', async (req, res) => {
    const result = await Query.find({ status: "com" });
    return res.send({ msg: "success", result: result });
})
queryRoute.get('/viewallpendingquery/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Query.findById(id);
        return res.send({ msg: "success", result: result });

    }catch(error){
        return res.send({ msg: "fail"});
    }
   
})
queryRoute.get('/viewallprocessingquery/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Query.findById(id);
        return res.send({ msg: "success", result: result });

    }catch(error){
        return res.send({ msg: "fail to fetch"});
    }
   
})
queryRoute.get('/viewallcompletedquery/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Query.findById(id);
        return res.send({ msg: "success", result: result });

    }catch(error){
        return res.send({ msg: "fail to fetch"});
    }
   
})
queryRoute.get('/viewpendingquery/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Query.findById(id);
        return res.send({ msg: "success", result: result });

    }catch(error){
        return res.send({ msg: "fail"});
    }
   
})
queryRoute.get('/viewprocessingquery/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Query.findById(id);
    return res.send({ msg: "success", result: result });
})
queryRoute.get('/viewcompletedquery/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Query.findById(id);
    return res.send({ msg: "success", result: result });
})
queryRoute.delete('/querydeleted/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Query.findByIdAndDelete(id);
    return res.send({ msg: "success", result: result });
})
queryRoute.post('/deletependingquery/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Query.findByIdAndDelete(id);
    return res.send({ msg: "success", result: result });
})
queryRoute.get('/admindashboard/id', async (req, res) => {
    const id = req.params.id;
    const result = await Query.find(id);
    return res.send({ msg: "success", result: result });
})
queryRoute.get('/totalquery', async (req, res) => {
    const result = await Query.find();
    return res.send({ msg: "success", result: result });
})
queryRoute.post('/editpendingquery/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Query.findByIdAndUpdate(id, req.body);
        return res.send({ msg: "success", result: result });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ msg: "Error updating query" })
    }
})



module.exports = queryRoute
