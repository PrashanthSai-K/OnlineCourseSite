const express = require('express');
const cors = require('cors')
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const sls = require('serverless-http');



const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

const connectionParam = {useNewUrlParser:true,useUnifiedTopology:true}
const uri =
  "mongodb+srv://root:abcd1234@anime.tpuvkvi.mongodb.net/anime?retryWrites=true&w=majority";
const connection = mongoose.connect(uri,connectionParam)
                            .then(()=>console.log("MongoDB Connected Successfully"))
                            .catch((error)=>console.log(error))

const userSchema = new mongoose.Schema({
    name:'string',
    desc:"string",
    image:"string"
})

const user = mongoose.model('course',userSchema)

app.get("/api/",(req,res)=>{

    user.find()
        .then((users)=>res.send(users))
        .catch((error)=>console.log(error))
})

    
module.exports.server = sls(app);

app.listen(5000,()=>console.log("app running on localhost 5000"))