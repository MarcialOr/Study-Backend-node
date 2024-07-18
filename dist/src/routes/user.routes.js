"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateFields_1 = require("../middlewares/validateFields");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.post("/create", [
    //validateJWT,
    validateFields_1.validateFieldsRequest
], user_controller_1.createUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map