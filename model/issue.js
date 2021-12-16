const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const issueModel= Schema({
      email:{
            type:String,
            required:false,

      },bookID:{
            type:String,
            required:false,

      },subDate:{
            type:String,
            required:false,
      },issueDate:{
            type:String,
            required:false,
      }
});

module.exports=mongoose.model('issue',issueModel);