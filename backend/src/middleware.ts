import { NextFunction, Request, Response } from "express-serve-static-core"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config"


export const userMiddleware:any = (req: Request, res: Response, next: NextFunction)=>{
    const headers = req.headers.authorization;
    const decoded = jwt.verify(headers as string, JWT_SECRET);

    if(decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }else{
        res.status(403).json({
            message: "user not logged in"
        })
    }
}