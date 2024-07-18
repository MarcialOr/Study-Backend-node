import { Router } from "express";
import validateJWT from "../middlewares/validateJWT";
import { validateFieldsRequest } from "../middlewares/validateFields";
import { createUser } from "../controllers/user.controller";


const router = Router()

router.post("/create", [
    //validateJWT,
    validateFieldsRequest
], createUser)


export default router