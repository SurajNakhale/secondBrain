import express from "express"
import z from "zod";
import { Content } from "../db";
import { userMiddleware } from "../middleware";


const contentRouter = express.Router();


contentRouter.post("/",userMiddleware, async (req, res)=>{

    const requireBody = z.object({
        link: z.string(),
        title: z.string(),
        type: z.string()
    })

    const result = requireBody.safeParse(req.body);

    if(!result.success){
        return res.json({
            message: "invalid input format",
            
        })
    }

    const {link, title, type} = result.data;

    try{
        await Content.create({
            link,
            type,
            title,
            tags: [],
            //@ts-ignore
            userId: req.userId,

        })
    }
    catch(e: any){
        res.json({
            message: "user not login",
            error: e.message
        })
    }

    res.status(200).json({
        message: "content added successfully"
    })
})

contentRouter.get("/", userMiddleware, async(req, res)=>{
    //@ts-ignore
    const userId = req.userId;
    try{
        const content = await Content.find({
            userId: userId
        }).populate("userId", "username")

        res.json({
            content
        })
    }
    catch(e:any){
        res.json({
            message: "user not logged in",
            error: e.message
        })
    }

})

contentRouter.delete("/", userMiddleware, async(req, res)=>{
    //@ts-ignore
    const contentId = req.body.contentId;
try{
   const result =  await Content.deleteMany({
        _id: contentId,

        //@ts-ignore
        userId: req.userId
    })

    if(result.deletedCount == 0){
        return res.status(404).json({
            message: "content not found"
        })
    }

}
catch(e: any){
    res.json({
        message: "user not logged in",
        error: e.message
    })
}

    res.json({
        message: "content deleted"
    })

})


export{ contentRouter }