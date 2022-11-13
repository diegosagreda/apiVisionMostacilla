const express = require('express');
const empleadoSchema = require('../models/empleado')
const router = express.Router();

//create empleado
router.post('/empleados', async (req, res) => {
    const empleado = empleadoSchema(req.body);
    empleado.save()
        .then((data)=> res.json(data))
        .catch(err=> res.status(400).json({message:err }));
})

//get all empleados
router.get('/empleados', (req, res)=>{
    empleadoSchema
       .find()
       .then(data=> res.json(data))
       .catch(err=> res.status(400).json({message:err }));
})

//get single empleado
router.get('/empleados/:id', (req, res)=>{
    const {id} = req.params;
    empleadoSchema
       .findById(id)
       .then(data=> res.json(data))
       .catch(err=> res.status(400).json({message:err }));
})
//update empleado
router.put('/empleados/:id', (req, res)=>{
    const {id} = req.params;
    const {cedula,nombre,edad,email} = req.body;

    empleadoSchema
        .updateOne({_id:id},{$set:{cedula,nombre,edad,email}})
        .then((data)=>res.json(data))
        .catch(err=>res.status(400).json({message:err }));
})
//delete empleado
router.delete('/empleados/:id', (req, res)=> {
    const {id} = req.params;
    empleadoSchema.findByIdAndRemove(id)
    .then(data=> res.json(data))
    .catch(err=> res.status(400).json({message:err }));

})

module.exports=router;