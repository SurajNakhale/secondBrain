import express from 'express'
import mongoose from 'mongoose'
import { userRouter } from "./routes/users"

const app = express();


app.use(express.json());
app.use("/api/v1/user", userRouter);



async function main(){
await mongoose.connect("mongodb+srv://surajnakhale2407:N3F4XZJre6QBdf5g@cluster0.z76fefw.mongodb.net/secondbrain")
.then(()=> console.log("mongoose connected"))
.catch((err)=> console.log("error", err))
app.listen(3000);
}

main();



// app.post("/api/v1/signin", (Req, res)=>{

// })

// app.get("/api/v1/content", (req, res)=>{

// })


// app.delete("/api/v1/content", (Req, res)=>{

// })

// app.post("/api/v1/share", (req, res)=>{

// })

// app.get("/api/v1/:shareLink", (req, res)=>{
    
// })