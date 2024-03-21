import { Request, Response } from "express";
import PersonaDAO from "../dao/personaDAO";

class PersonaControlador extends PersonaDAO {

    public damelasTodas(req: Request, res:Response): void {

        PersonaDAO.obtenerTodos([], res);

    }

}

const personaControlador = new PersonaControlador();
export default personaControlador;