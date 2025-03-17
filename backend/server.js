const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 4500;

app.use(cors());

app.get("/api/test",(req,res)=>{
    res.json({message:"Backend Connected!"});
})

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})


























