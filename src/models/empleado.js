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
    edad:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model('user',empleadoSchema);