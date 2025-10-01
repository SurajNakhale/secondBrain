import  express  from "express"
import z from "zod"
import jwt from "jsonwebtoken"
const userRouter = express.Router();
import { User } from "../db"
import bcrypt from "bcrypt"
import { JWT_SECRET } from "../config"

userRouter.post("/signup", async (req, res)=>{
    const requireBody = z.object({
     username: z.string().min(3),
     password: z.string().min(3,{
        message: "atleast 3 character are required"
     })    
    })
    console.log(requireBody);


    const result = requireBody.safeParse(req.body);

    if(!result.success){
        return res.json({
            message: "invalid input format"
        })
    }
    console.log(result);
    const {username, password} = result.data;

    const hashPassword =await bcrypt.hash(password, 5);

    try{
        await User.create({
            username,
            password: hashPassword,
        })
    }
    catch(e:any){
        return res.status(411).json({
            msg: "you are already signup",
            error: e.message
        })

    }

    res.status(200).json({
        message: "user signup successful"
    });
})

userRouter.post("/signin", async (req, res)=>{
    const requireBody = z.object({
        username: z.string().min(3),
        password: z.string().min(3)
    })

    const result = requireBody.safeParse(req.body);

    if(!result.success){
        return res.json({
            message: "user does not exist"
        })
    }

    const { username, password } = result.data;

    const userExist = await User.findOne({
        username: username,
    })

    // console.log(userExist);
    
    if(userExist){
        const passwordMatch =await bcrypt.compare(password, userExist.password);

        if(passwordMatch){
            const token = jwt.sign({
                id: userExist._id
            }, JWT_SECRET)

            res.json({
                token: token
            })
        }
        else{
            res.json({
                message: "incorrect password"
            })
        }
    }
    else{
        res.json({
            message: "user does not exists"
        })
    }
})





export { userRouter };