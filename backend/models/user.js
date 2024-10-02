// models/user.js
import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  fullName: {type:String,required:true,unique:false},
  email: {type:String,required:true,unique:true},
  password: {type:String,required:true},
  role: {
    type: String,
    enum: ['admin', 'recruiter', 'jobseeker'],
    default: 'jobseeker',
  },
  isProfileComplete:{
    type: Boolean,
    default: false,
  }
});

const UserModel = mongoose.model('User', UserSchema);
export {UserModel as User}
