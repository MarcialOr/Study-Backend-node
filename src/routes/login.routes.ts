import { Router } from "express";
import login from "../controllers/login.controller";
import { validateFieldsRequest } from "../middlewares/validateFields";


const router = Router()

router.post('/login',[
    validateFieldsRequest
],login)

export default router


/*
Esto funciona para validar los fields no esten vacios dentro de la Router
check('username', labels.EMPTY_FIELD).not().isEmpty(),
check('password', labels.EMPTY_FIELD).not().isEmpty(),
check('role', labels.EMPTY_FIELD).not().isEmpty(),
check('status', labels.EMPTY_FIELD).not().isEmpty()
*/ 