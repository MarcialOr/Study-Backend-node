"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const validateFields_1 = require("../middlewares/validateFields");
const router = (0, express_1.Router)();
router.post('/login', [
    validateFields_1.validateFieldsRequest
], login_controller_1.default);
exports.default = router;
/*
Esto funciona para validar los fields no esten vacios dentro de la Router
check('username', labels.EMPTY_FIELD).not().isEmpty(),
check('password', labels.EMPTY_FIELD).not().isEmpty(),
check('role', labels.EMPTY_FIELD).not().isEmpty(),
check('status', labels.EMPTY_FIELD).not().isEmpty()
*/ 
//# sourceMappingURL=login.routes.js.map