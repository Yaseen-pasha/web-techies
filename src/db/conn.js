const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB || "mongodb://localhost:27017/webWonders",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successfull...");
}).catch((error)=>{
    console.log(error);
    console.log("No Connection..??");
});