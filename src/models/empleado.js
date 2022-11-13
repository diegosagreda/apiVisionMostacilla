const mongoose = require("mongoose");

const empleadoSchema = mongoose.Schema({
    cedula: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        require:true
    },
    direccion:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model('empleado',empleadoSchema);