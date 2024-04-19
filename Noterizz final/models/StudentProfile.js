const mongoose=require("mongoose");

const studentSchema = new mongoose.Schema({
    AboutMe: { type: String },
    PostalCode: { type: String, required: true },
    City: { type: String },
    Cgpa: { type: Number },
    Address: { type: String},
    LastName: { type: String },
    FirstName: { type: String},
    Division: { type: String },
    Year: { type: Number },
    Course: { type: String },
    Email_address: { type: String },
    Uid: { type: String},
    Username: { type: String }
  });
  

const Student = mongoose.model("Student",studentSchema)
module.exports=Student;