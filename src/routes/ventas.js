const express = require('express');
const ventaSchema = require('../models/ventas')
const router = express.Router();

//create venta
router.post('/ventas', async (req, res) => {
    const venta = ventaSchema(req.body);
    venta.save()
        .then((data)=> res.json(data))
        .catch(err=> res.status(400).json({message:err }));
})

//get all venta
router.get('/ventas', (req, res)=>{
    ventaSchema
       .find()
       .then(data=> res.json(data))
       .catch(err=> res.status(400).json({message:err }));
})

//get single venta
router.get('/ventas/:id', (req, res)=>{
    const {id} = req.params;
    ventaSchema
       .findById(id)
       .then(data=> res.json(data))
       .catch(err=> res.status(400).json({message:err }));
})
//update venta
router.put('/ventas/:id', (req, res)=>{
    const {id} = req.params;
    const {name,age,email} = req.body;

    ventaSchema
        .updateOne({_id:id},{$set:{name,age,email}})
        .then((data)=>res.json(data))
        .catch(err=>res.status(400).json({message:err }));

})   
//delete venta
router.delete('/ventas/:id', (req, res)=> {
    const {id} = req.params;
    ventaSchema.findByIdAndRemove(id)
    .then(data=> res.json(data))
    .catch(err=> res.status(400).json({message:err }));

})

module.exports=router;