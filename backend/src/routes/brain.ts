import express from "express"
import { userMiddleware } from "../middleware";
import { Link, Content, User } from "../db"
import  crypto  from "crypto"

const brainRouter = express.Router();

brainRouter.post("/share" , userMiddleware, async(req, res)=>{
    
    try{
        const token  = crypto.randomBytes(8).toString('hex');
        console.log(token);
        const { share } = req.body;
        if(share){

            let existingLink = await Link.findOne({
                //@ts-ignore
                userId: req.userId
            })
    
            if(existingLink){
                const existingUrl = `${req.protocol}://${req.get("host")}/brain/${existingLink.token}`;
                return res.json({
                    existingUrl
                })
            }
    
    
            console.log("shared token generated:", token);
            const newlink = await Link.create({
                token,
                //@ts-ignore
                userId: req.userId
            });
            const host = req.get("host") || "localhost";
            const newUrl = `${req.protocol}://${host}api/v1/brain/${newlink.token}`;
    
            res.json({
                newUrl,
                reused: false,
            })
    
        }
        else{
            await Link.deleteOne({
                //@ts-ignore
                userId: req.userId
            })

            res.json({
                Message: "link removed"
            })
        }
    }
    catch(e){
        console.error(e);
        return res.status(500).json({
            message: "Failed to create or fetch share link"
        })
    }

})

brainRouter.get("/:sharelink", async (req, res)=>{
    try{

        const token = req.params.sharelink;
    
        const link = await Link.findOne({ token });
        console.log("generated:", token)
        if(!link){
            return res.json({ message: "invalid shared link"});
        }
    
    
        // fetch user details and conetn from that link shared:
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