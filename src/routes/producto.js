const express = require('express');
const productoSchema = require('../models/producto')
const router = express.Router();

//create producto
router.post('/productos', async (req, res) => {
    const producto = productoSchema(req.body);
    producto.save()
        .then((data)=> res.json(data))
        .catch(err=> res.status(400).json({message:err }));
})

//get all producto
router.get('/productos', (req, res)=>{
    productoSchema
       .find()
       .then(data=> res.json(data))
       .catch(err=> res.status(400).json({message:err }));
})

//get single user
router.get('/productos/:id', (req, res)=>{
    const {id} = req.params;
    productoSchema
       .findById(id)
       .then(data=> res.json(data))
       .catch(err=> res.status(400).json({message:err }));
})
//update user
router.put('/productos/:id', (req, res)=>{
    const {id} = req.params;
    const {imagen,nombre,descripcion,caracteristicas,precio,cantidad,destacado,categoria} = req.body;

    productoSchema
        .updateOne({_id:id},{$set:{imagen,nombre,descripcion,caracteristicas,precio,cantidad,destacado,categoria}})
        .then((data)=>res.json(data))
        .catch(err=>res.status(400).json({message:err }));

})


//delete user
router.delete('/productos/:id', (req, res)=> {
    const {id} = req.params;
    productoSchema.findByIdAndRemove(id)
    .then(data=> res.json(data))
    .catch(err=> res.status(400).json({message:err }));

})

module.exports=router;