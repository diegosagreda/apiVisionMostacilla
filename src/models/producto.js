const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    imagen: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    caracteristicas:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    destacado:{
        type:Boolean,
        required: true
    }
});


module.exports = mongoose.model('producto',productoSchema);