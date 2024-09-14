// models/user.js
import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  fullName: {type:String,required:true,unique:true},
  email: {type:String,required:true,unique:true},
  password: {type:String,required:true}
  // role: {
  //   type: String,
  //   enum: ['admin', 'recruiter', 'transcriber', 'translator'], // Define roles here
  //   default: 'transcriber',
  // },
  // other fields...
});

const UserModel = mongoose.model('User', UserSchema);
export {UserModel as User}
