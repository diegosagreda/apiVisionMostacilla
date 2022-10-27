const mongoose = require("mongoose");

const categoriaSchema = mongoose.Schema({
    imagen: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }
    
});


module.exports = mongoose.model('categoria',categoriaSchema);