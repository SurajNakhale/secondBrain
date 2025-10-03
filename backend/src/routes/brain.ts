import express from "express"
import { userMiddleware } from "../middleware";
import { Link, Content, User } from "../db"
import  crypto  from "crypto"

const brainRouter = express.Router();

brainRouter.post("/share" , userMiddleware, async(req, res)=>{
    
    try{
        const token  = crypto.randomBytes(8).toString('hex');
        console.log(token);
        const { content } = req.body;

        let existingLink = await Link.findOne({
            //@ts-ignore
            userId: req.userId,
            content: content
        })

        if(existingLink){
            const existingUrl = `${req.protocol}://${req.get("host")}/brain/${existingLink.token}`;
            return res.json({
                existingUrl,
                reused: true,
            })
        }


        console.log("shared token generated:", token);
        const newlink = await Link.create({
            token,
            //@ts-ignore
            userId: req.userId,
            content: content,
        });
        const host = req.get("host") || "localhost";
        const newUrl = `${req.protocol}://${host}/brain/${newlink.token}`;

        res.json({
            newUrl,
            reused: false,
        })

    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: "Failed to create or fetch share link"
        })
    }
})

brainRouter.get("/:sharelink", userMiddleware, async (req, res)=>{
    try{

        const token = req.params.sharelink;
    
        const link = await Link.findOne({ token });
    
        if(!link){
            return res.json({ message: "invalid shared link"});
        }
    
    
        // fetch user detailsand conetn from that link shared:
        const content = await Content.find({ userId: link?.userId });
        const user = await User.findById({_id: link?.userId})
    
        if(!user){
            return res.json({
                message: "user not found"
            })
        }
    
        res.json({
            
            username: user.username,
            content: content
        })
    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: "failed to fetch content from shared link"
        })
    }

})

export { brainRouter }