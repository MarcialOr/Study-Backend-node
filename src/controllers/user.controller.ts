import { Request ,Response } from "express";
import Login from "../models/login.model";
import bcrypt from "bcryptjs"
import labels from "../labels";

export const createUser = async (req: Request, res: Response) => {
    try {
        
        const {username, password, role} = req.body
        const user = new Login({username, password, role})

        const salt = bcrypt.genSaltSync()
        user._password = bcrypt.hashSync(password, salt)

        await user.save()

        //mensaje diiendo que se hizo correctamente
        res.status(201).json({
            msg: labels.SUCCESSFUL_REGISTER,
            username: user._username
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.MSG_500,
            response: labels.ERROR
        })
    }
}