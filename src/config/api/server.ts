import cors from "cors";
import morgan from "morgan";
import express from "express";

import cubiculoRutas from "../../app/room/route/cubiculoRutas";
import reservacionRutas from "../../app/reservation/route/reservacionRutas";
import rolRutas from "../../app/role/route/rolRutas";
import personaRutas from "../../app/person/route/personaRutas";
import penalizacionRutas from "../../app/penalty/route/penalizacionRutas";
import tipopenalizacionRutas from "../../app/penaltytype/route/tipopenalizacionRutas";
import tipoestadopenalizacionRutas from "../../app/penaltystatustype/route/tipoestadopenalizacionRutas";
import tipoEstadoReservacionRutas from "../../app/reservationstatustype/route/tipoestadodereservaRutas";
import EstadoReservacionRutas from "../../app/reservationstatus/route/estadoreservacionRutas";
import estadoPenalizacionRutas from "../../app/penaltystatus/route/estadopenalizacionRutas";

class Server {

    public app: express.Application;

    constructor() {

        this.app = express();
        this.loadConfig();
        this.loadRoute();

    }

    public loadConfig():void {

        this.app.set("PORT", 3123);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit: "100mb"}));
        this.app.use(express.urlencoded({extended: true})); 

    }

    public loadRoute():void {

        this.app.use("/room", cubiculoRutas);
        this.app.use("/reservation", reservacionRutas);
        this.app.use("/role", rolRutas);
        this.app.use("/person", personaRutas);
        this.app.use("/penalty", penalizacionRutas);
        this.app.use("/penaltytype", tipopenalizacionRutas);
        this.app.use("/penaltystatustype", tipoestadopenalizacionRutas);
        this.app.use("/reservationstatustype", tipoEstadoReservacionRutas);
        this.app.use("/reservationstatus", EstadoReservacionRutas);
        this.app.use("/penaltystatus", estadoPenalizacionRutas);

    }

    public start():void {

        this.app.listen(this.app.get("PORT"), ()=>{

            console.log("Sirve", this.app.get("PORT"));

        });

    } 

}

export default Server;
