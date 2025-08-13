const mongoose=require('mongoose');

const mongourl=process.env.MONGO_URL;
mongoose.connect(mongourl).then(()=>{
    console.log("database connected succesfully");

}).catch((err)=>{
    console.log("database couldn't connect",err);
    
})