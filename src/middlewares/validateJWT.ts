import { Request, Response, NextFunction } from "express";
import labels from "../labels";
import jwt from "jsonwebtoken";
import Login from "../models/login.model";


const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        //Sirv para cada vez se quiera hacer login se neceista
        const token = req.header(labels.AUTHORIZATION)?.split(' ')[1]

        if(!token){
            //NO autorizado 401
            return res.status(401).json({
                msg: labels.TOKEN_FAILED
            })
        }

        const {uid} = <any> jwt.verify(token, process.env.SECRET_KEY || '')
        const user = await Login.findById(uid)

        if(!user){
            return res.status(401).json({
                msg: labels.TOKEN_FAILED
            })
        }

        if(!user._status){
            return res.status(401).json({
                msg: labels.TOKEN_FAILED
            })
        }

        next()

    } catch (error) {
        console.error(error)
        res.status(500).json({
            mdg: labels.MSG_500,
            response: labels.ERROR
        })
    }
}

export default validateJWT