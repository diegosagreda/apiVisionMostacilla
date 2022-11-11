const mongoose = require("mongoose");

const ventaSchema = mongoose.Schema(
    {
     productos:{         
        type: [],
        required:true
     },
     valor:{
        type: Number,
        required:true
     },   
    }
)

module.exports = mongoose.model('venta',ventaSchema);