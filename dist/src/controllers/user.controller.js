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
exports.createUser = void 0;
const login_model_1 = __importDefault(require("../models/login.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const labels_1 = __importDefault(require("../labels"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, role } = req.body;
        const user = new login_model_1.default({ username, password, role });
        const salt = bcryptjs_1.default.genSaltSync();
        user._password = bcryptjs_1.default.hashSync(password, salt);
        yield user.save();
        //mensaje diiendo que se hizo correctamente
        res.status(201).json({
            msg: labels_1.default.SUCCESSFUL_REGISTER,
            username: user._username
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.MSG_500,
            response: labels_1.default.ERROR
        });
    }
});
exports.createUser = createUser;
//# sourceMappingURL=user.controller.js.map