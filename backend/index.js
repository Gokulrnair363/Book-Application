const express=require('express')
require('dotenv').config();
require('./DB/connection') 
const UserRoutes=require('./Router/UserRoutes') 
const BookRoutes=require('./Router/BookRoutes')
const bookserver=express();
const cors=require('cors');

bookserver.use(express.json());
bookserver.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

bookserver.use('/api/users', UserRoutes);
bookserver.use('/api',BookRoutes)
const PORT=process.env.PORT ||9000;

bookserver.listen(PORT,()=>{
console.log(`Server started running ${PORT}`);
})
bookserver.get('/',(req,res)=>{
    res.send("welcome to the server Gokul R Nair")
})