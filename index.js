import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

app.get("/", (req,res)=>{
    res.status(200).json({
        message: "Hello from the server v 96"
    });
});

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running at ${process.env.PORT || 3000}`)
})