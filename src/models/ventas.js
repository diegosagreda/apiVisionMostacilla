const mongoose = require("mongoose");

const ventaSchema = mongoose.Schema(
    {
     productos:{         
        type: [],
        required:true
     },
     fecha:{
      type:String,
      require:true
     },
     hora:{
      type:String,
      require:true
     },
     informacionCliente:{
      type:{},
      require: true
     },
     informacionEntrega:{
      type:{},
      require: true
     },
     valor:{
        type: Number,
        required:true
     },
     estado:{
      type: String,
     }   
    }
)

module.exports = mongoose.model('venta',ventaSchema);