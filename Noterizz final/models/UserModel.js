import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
    email:{type:String,required:true},
    password:{type:String,required:true}
   }
)

const UserModel = mongoose.model("User",userSchema);

 module.exports={
    UserModel
 };