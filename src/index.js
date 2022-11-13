const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user");
const productosRoutes = require("./routes/producto");
const ventasRoutes = require('./routes/ventas')
const categoriasRoutes = require('./routes/categoria.routes')
//const empleadosRoutes = require('./routes/empleado.routes')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 9000;

app.use(cors())
//middleware
app.use(express.json())
app.use('/api',userRoutes);
app.use('/api',productosRoutes);
app.use('/api',ventasRoutes);
app.use('/api',categoriasRoutes)
//app.use('/api/',empleadosRoutes)


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
// dixon api