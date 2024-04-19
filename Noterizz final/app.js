const express = require("express");
const mongoose=require("mongoose");
const path = require("path");
//import { UserModel } from "./models/UserModel.js";
const Student =require("./models/StudentProfile.js");
const app = express();
var curr_user;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
mongoose.connect('mongodb://localhost:27017/noteRizz') 
const db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('open');
})

app.get("/",(req,res)=>
{
    res.render("index.ejs")
})

app.get("/studentlogin",(req,res)=>
{
   res.render("studentlogin.ejs")
})
app.get("/studentPerf",(req,res)=>
{
    res.render("studentPerf.ejs")
})
app.get("/notesDown",(req,res)=>
{
    res.render("notesDown.ejs")
})
app.get("/notesupload",(req,res)=>
{
    res.render("notesupload.ejs")
})
app.get("/notifications",(req,res)=>
{
    res.render("notifications.ejs")
})
app.get("/typography",(req,res)=>
{
    res.render("typography.ejs")
})

app.post("/studentlogin", (req, res) =>
{
   res.redirect("/studentPerf");
});

app.get("/user",(req,res)=>{
    res.render("user.ejs")
})
app.get("/typography/:Email_address", async (req, res) => {
    const Email_address = req.params.Email_address; // Extract the email address from route parameters
    
    try {
        const newStudent = await Student.findOne({ Email_address: Email_address });
        
        if (newStudent) {
            res.render("typography.ejs", { newStudent: newStudent });
        } else {
            res.render("typography.ejs", { newStudent: null });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post("/user",async(req,res)=>{
    const newStudent= new Student(req.body);
await newStudent.save();
curr_user=newStudent.Email_address;
res.redirect("/typography/"+newStudent.Email_address)
})
const PORT =  5000; 
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
