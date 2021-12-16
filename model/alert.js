const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const alertModel= Schema({
      email:{
            type:String,
            required:false,

      },msg:{
            type:String,
            required:false,

      },bookID:{
            type:String,
            required:false,
      },date:{
            type:String,
            required:false,
      }
});

module.exports=mongoose.model('alert',alertModel);
