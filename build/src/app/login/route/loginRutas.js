"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginControlador_1 = __importDefault(require("../controller/loginControlador"));
class LoginRutas {
    constructor() {
        this.apiRutaLogin = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaLogin.get("/getall", loginControlador_1.default.damelasTodas);
        this.apiRutaLogin.post("/ingresar", loginControlador_1.default.access);
    }
}
const loginRutas = new LoginRutas;
exports.default = loginRutas.apiRutaLogin;
