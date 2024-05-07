import { Request, Response } from "express";
import EstadoPenalizacionDAO from "../dao/estadopenalizacionDAO";
import EstadoPenalizacion from "../entity/estadoPenalizacion";

class   EstadoPenalizacionControlador extends EstadoPenalizacionDAO {

    public damelasTodas(req: Request, res: Response): void {

        EstadoPenalizacionDAO.obtenerTodos([], res);

    }

    public cogeTuEstadoPenalizacion (req: Request, res: Response): void{
        const objEstPen: EstadoPenalizacion = new EstadoPenalizacion(0, 0, 0);
        objEstPen.idTipoEstadoPenalizacion = req.body.idTipoEstadoPenalizacion;
        objEstPen.idPenalizacion = req.body.idPenalizacion;
        EstadoPenalizacionDAO.grabeloYa(objEstPen, res);
    }
}

const estadoPenalizacionControlador = new EstadoPenalizacionControlador();
export default estadoPenalizacionControlador;