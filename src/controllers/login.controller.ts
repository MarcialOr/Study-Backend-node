import { Request, Response} from "express";
import LoginModel from "../models/login.model";
import labels from "../labels";
import bcrypt from "bcryptjs";
import getJWT from "../helpers/jwt";

const login = async (req: Request, res: Response) => {
    try {
        
        const {username, password} = req.body

        const user = await LoginModel.findOne({username})

//Usuario existe en la base de datos
        if(!user){
            return res.status(400).json({
                msg: labels.MSG_400,
                response: labels.FAILED_LOGIN
            })
        }
//Saber cual es el estatus del usuario que es booleano
        if(!user._status){
            return res.status(400).json({
                msg: labels.MSG_400,
                response: labels.STATUS_USER
            })
        }     

// Se valida si la contraseñas son las correctas
        const validPasword = bcrypt.compareSync(password,user._password)

        if(!validPasword){
            return res.status(400).json({
                msg: labels.MSG_400,
                response: labels.FAILED_LOGIN
            })
        }

//Convertit el token a string para que nos funcione
        const token = await getJWT(String(user._id))

        res.status(200).json({
            msg: labels.SUCCESSFUL_LOGIN,
            username: user._username,
            token,
            //Formato de segundos
            expiresIn: 3600
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            msg: labels.MSG_500,
            RESPONSE: labels.ERROR
        })
    }
}

export default login