const express = require('express');
const categoriaSchema = require('../models/categoria')
const router = express.Router();

//create categoria
router.post('/categorias', async (req, res) => {
    const categoria = categoriaSchema(req.body);
    categoria.save()
        .then((data)=> res.json(data))
        .catch(err=> res.status(400).json({message:err }));
})

//get all categorias
router.get('/categorias', (req, res)=>{
    categoriaSchema
       .find()
       .then(data=> res.json(data))
       .catch(err=> res.status(400).json({message:err }));
})

//get single categoria
router.get('/categorias/:id', (req, res)=>{
    const {id} = req.params;
    categoriaSchema
       .findById(id)
       .then(data=> res.json(data))
       .catch(err=> res.status(400).json({message:err }));
})
//update categoria
router.put('/categorias/:id', (req, res)=>{
    const {id} = req.params;
    const {imagen,nombre} = req.body;

    categoriaSchema
        .updateOne({_id:id},{$set:{imagen,nombre}})
        .then((data)=>res.json(data))
        .catch(err=>res.status(400).json({message:err }));
})
//delete categoria
router.delete('/categoria/:id', (req, res)=> {
    const {id} = req.params;
    categoriaSchema.findByIdAndRemove(id)
    .then(data=> res.json(data))
    .catch(err=> res.status(400).json({message:err }));

})

module.exports=router;