"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("../entity/login"));
const loginDAO_1 = __importDefault(require("../dao/loginDAO"));
class LoginControlador extends loginDAO_1.default {
    damelasTodas(req, res) {
        loginDAO_1.default.obtenerTodos([], res);
    }
    access(req, res) {
        const objLogin = new login_1.default("0", "0");
        objLogin.correoElectronicoLogin = req.body.correoElectronicoLogin;
        objLogin.claveLogin = req.body.claveLogin;
        loginDAO_1.default.compruebeloYa(objLogin, res);
    }
}
const loginControlador = new LoginControlador();
exports.default = loginControlador;
