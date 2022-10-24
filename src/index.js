const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user");
const productosRoutes = require("./routes/producto");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api',userRoutes);
app.use('/api',productosRoutes);


//routes
app.get('/',(req,res)=>{
    res.send("Welcome to Appii");
})

//mongoose connections
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to database"))
.catch((err)=>console.log(err))

app.listen(port, () => console.log('Listen Port: 9000'))