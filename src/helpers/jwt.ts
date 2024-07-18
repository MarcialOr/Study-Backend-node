import { sign } from 'jsonwebtoken';
import labels from '../labels';

//uid es un el id de los documentos nase de dato no relacional
const getJWT = (uid: string) => {
    try {
        return new Promise((resolve, reject)=> {
            const payload = { uid }
            //Se crea un token que va a durar una hora de tiempo
            sign(payload, process.env.SECRET_KEY || '',{
                expiresIn: '1h'
            }, (error, token) => {
                if(error){
                    console.error(error)
                    reject(labels.ERROR_TOKEN)
                }else{
                    resolve(token)
                }
            })
        }) 
    } catch (error) {
        console.error(error)
        throw new Error(labels.ERROR)
    }
}

export default getJWT