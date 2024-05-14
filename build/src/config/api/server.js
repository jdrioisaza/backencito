"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cubiculoRutas_1 = __importDefault(require("../../app/room/route/cubiculoRutas"));
const reservacionRutas_1 = __importDefault(require("../../app/reservation/route/reservacionRutas"));
const rolRutas_1 = __importDefault(require("../../app/role/route/rolRutas"));
const personaRutas_1 = __importDefault(require("../../app/person/route/personaRutas"));
const penalizacionRutas_1 = __importDefault(require("../../app/penalty/route/penalizacionRutas"));
const tipopenalizacionRutas_1 = __importDefault(require("../../app/penaltytype/route/tipopenalizacionRutas"));
const tipoestadopenalizacionRutas_1 = __importDefault(require("../../app/penaltystatustype/route/tipoestadopenalizacionRutas"));
const tipoestadodereservaRutas_1 = __importDefault(require("../../app/reservationstatustype/route/tipoestadodereservaRutas"));
const estadoreservacionRutas_1 = __importDefault(require("../../app/reservationstatus/route/estadoreservacionRutas"));
const estadopenalizacionRutas_1 = __importDefault(require("../../app/penaltystatus/route/estadopenalizacionRutas"));
const loginRutas_1 = __importDefault(require("../../app/login/route/loginRutas"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.loadConfig();
        this.loadRoute();
    }
    loadConfig() {
        this.app.set("PORT", 3123);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    loadRoute() {
        this.app.use("/room", cubiculoRutas_1.default);
        this.app.use("/reservation", reservacionRutas_1.default);
        this.app.use("/role", rolRutas_1.default);
        this.app.use("/person", personaRutas_1.default);
        this.app.use("/penalty", penalizacionRutas_1.default);
        this.app.use("/penaltytype", tipopenalizacionRutas_1.default);
        this.app.use("/penaltystatustype", tipoestadopenalizacionRutas_1.default);
        this.app.use("/reservationstatustype", tipoestadodereservaRutas_1.default);
        this.app.use("/reservationstatus", estadoreservacionRutas_1.default);
        this.app.use("/penaltystatus", estadopenalizacionRutas_1.default);
        this.app.use("/login", loginRutas_1.default);
    }
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Sirve", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
