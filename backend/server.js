require ("dotenv").config();
const express = require('express');
const mongoose = require ("mongoose");
const cors = require ("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("MONGODB Connected"))
.catch((err)=>console.error("MongoDB Connection failed",err));

const contestRoutes = require("./routes/contestRoutes");
app.use("/api/contests", contestRoutes);

const PORT = process.env.PORT || 4500;
app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
});