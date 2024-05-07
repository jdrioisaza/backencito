import { Request, Response } from "express";
import Login from "../entity/login";
import LoginDAO from "../dao/loginDAO";

class LoginControlador extends LoginDAO {

    public damelasTodas(req: Request, res:Response): void {
        LoginDAO.obtenerTodos([], res);
    }

    public access(req: Request, res: Response): void {
        const objLogin: Login = new Login("0", "0");
        objLogin.correoElectronicoLogin = req.body.correoElectronicoLogin;
        objLogin.claveLogin = req.body.claveLogin;
        LoginDAO.compruebeloYa(objLogin, res);
    }
}

const loginControlador = new LoginControlador();
export default loginControlador;