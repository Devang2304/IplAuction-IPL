const express = require('express');
const app = express();
const cors=require('cors');
const mongoose= require('mongoose');
const PORT =9000;
const teamUser=require('./models/models.js')


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://DEVANG23:sGS9G3qDgNVQztE@cluster0.ngb8lfk.mongodb.net/test_project';

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected to mongoDB successfully');
}).catch(err=>{console.log('No connection')});

app.listen(PORT,()=>{
    console.log(`listening on port http://localhost:${PORT}`);
});

app.post("/login",(req,res)=>{
    const {name,password} =req.body;
    teamUser.findOne({name:name},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"login successfully",user:user})
            }else{
                res.send({message:"password does not match"})
            }
        }else{
            res.send({message:"user not registered"});
        }
    })
})