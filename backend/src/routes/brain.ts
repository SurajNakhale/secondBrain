import express from "express"
import { userMiddleware } from "../middleware";

const brainRouter = express.Router();

brainRouter.post("/share" , userMiddleware, async(req, res)=>{

})

brainRouter.get("/:sharelink", (req, res)=>{


})

export { brainRouter }