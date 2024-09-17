const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
// const port= process.env.PORT || 8000;
const port=8000;
const queryRouter=require('./routes/queryRoute')
const userRouter=require('./routes/userRoute');
const adminRouter = require('./routes/adminRoute');



mongoose.connect("mongodb://localhost:27017/karam")
    .then(() => console.log("Mongoose connected!"))
    .catch(() => console.log("Connection not done"))

//middleware
app.use(express.json())
app.use(cors());
app.use(adminRouter)
app.use(queryRouter)




app.use(userRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});
app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting server on port ${port}:`, err);
    } else {
        console.log(`Server running on port ${port}`);
    }
});


