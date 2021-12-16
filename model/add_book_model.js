const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const addBookModel= Schema({
      name:{
            type:String,
            required:false,

      },img:{
            type:String,
            required:false,

      },author:{
            type:String,
            required:false,
      },dept:{
            type:String,
            required:false,
      },price:{
            type:String,
            required:false
      }
});

module.exports=mongoose.model('addBook',addBookModel);