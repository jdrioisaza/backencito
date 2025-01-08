import { Router } from "express";
import loginControlador from "../controller/loginControlador";

class LoginRutas {

    public apiRutaLogin: Router;

    constructor() {
        this.apiRutaLogin = Router();
        this.misRutas();
    }
    
    private misRutas():void {
        this.apiRutaLogin.get("/getall", loginControlador.damelasTodas);
        this.apiRutaLogin.post("/ingresar", loginControlador.access);
    }

}

const loginRutas = new LoginRutas;
export default loginRutas.apiRutaLogin;