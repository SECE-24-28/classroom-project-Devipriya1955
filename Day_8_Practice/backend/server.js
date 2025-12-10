const http = require("http")
http.createServer( (req,res) => {
    res.end("Node server is running");
}).listen(5000);

// const express=require("express");
// const app=express();

// app.get("/",(req,res)=>{
//     res.send("Express server is running");
// });

// app.listen(5000);