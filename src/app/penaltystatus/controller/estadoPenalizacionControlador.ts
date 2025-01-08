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

    public borraTuEstadoPenalizacion(req: Request, res: Response): void {
        if (isNaN(Number(req.params.idEstadoPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo?"});
        } else {
            const codigito = Number(req.params.idEstadoPenalizacion);
            const objEstPen: EstadoPenalizacion = new EstadoPenalizacion(codigito, 0, 0);
            EstadoPenalizacionDAO.borreloYa(objEstPen, res);
        }
    }

    public actualiceTuEstadoPenalizacion(req: Request, res: Response): void{
        if (isNaN(Number(req.body.idEstadoPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo?" });
        } else {
            const objEstPen: EstadoPenalizacion = new EstadoPenalizacion(0, 0, 0);
            objEstPen.idEstadoPenalizacion = Number(req.body.idEstadoPenalizacion);
            objEstPen.idTipoEstadoPenalizacion = Number(req.body.idTipoEstadoPenalizacion);
            objEstPen.idPenalizacion = Number(req.body.idPenalizacion)
        }
    }
}

const estadoPenalizacionControlador = new EstadoPenalizacionControlador();
export default estadoPenalizacionControlador;