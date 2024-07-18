"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFieldsRequest = void 0;
const express_validator_1 = require("express-validator");
const labels_1 = __importDefault(require("../labels"));
const validateFieldsRequest = (req, res, next) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty) {
            return res.status(400).json({
                msg: labels_1.default.EMPTY_FIELD,
                errors
            });
            next();
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.MSG_500,
            response: labels_1.default.ERROR
        });
    }
};
exports.validateFieldsRequest = validateFieldsRequest;
//# sourceMappingURL=validateFields.js.map