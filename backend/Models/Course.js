import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  year: {
    type:String,
  required:true
},
  branch: {
    type:String,
    required:true
  },
  topic:{
    type:String,
    required:true,
    minlength:[5,"Enter minimum 5 characters"]
  },
  link: {
    type:String,
    required:true
  }
});


const User=mongoose.model('User',courseSchema);

export default User;
