"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const labels_1 = __importDefault(require("../labels"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login_model_1 = __importDefault(require("../models/login.model"));
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        //Sirv para cada vez se quiera hacer login se neceista
        const token = (_a = req.header(labels_1.default.AUTHORIZATION)) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            //NO autorizado 401
            return res.status(401).json({
                msg: labels_1.default.TOKEN_FAILED
            });
        }
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || '');
        const user = yield login_model_1.default.findById(uid);
        if (!user) {
            return res.status(401).json({
                msg: labels_1.default.TOKEN_FAILED
            });
        }
        if (!user._status) {
            return res.status(401).json({
                msg: labels_1.default.TOKEN_FAILED
            });
        }
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            mdg: labels_1.default.MSG_500,
            response: labels_1.default.ERROR
        });
    }
});
exports.default = validateJWT;
//# sourceMappingURL=validateJWT.js.map