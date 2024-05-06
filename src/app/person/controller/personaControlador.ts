import { Request, Response } from "express";
import Persona from "../entity/persona";
import PersonaDAO from "../dao/personaDAO";

class PersonaControlador extends PersonaDAO {

    public damelasTodas(req: Request, res:Response): void {

        PersonaDAO.obtenerTodos([], res);

    }

    public cogeTuPersona(req: Request, res: Response): void {
        const objPerso: Persona = new Persona (0, 0, "0", "0", "0", "0", "0", "0");
        objPerso.idRolPersona = req.body.idRolPersona;
        objPerso.primerNombrePersona = req.body.primerNombrePersona;
        objPerso.segundoNombrePersona = req.body.segundoNombrePersona;
        objPerso.primerApellidoPersona = req.body.primerApellidoPersona;
        objPerso.segundoApellidoPersona = req.body.segundoApellidoPersona;
        objPerso.correoElectronicoPersona = req.body.correoElectronicoPersona;
        objPerso.clavePersona = req.body.clavePersona;
        PersonaDAO.grabeloYa(objPerso, res);
      }

}

const personaControlador = new PersonaControlador();
export default personaControlador;