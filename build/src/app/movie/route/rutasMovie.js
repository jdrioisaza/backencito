"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MovieController_1 = __importDefault(require("../controller/MovieController"));
class MovieRutas {
    constructor() {
        this.apiRutaMovie = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaMovie.get("/getall", MovieController_1.default.damelasTodas);
        this.apiRutaMovie.post("/addcito", MovieController_1.default.cogeTuPelicula);
        this.apiRutaMovie.delete("/delete/:idPelicula", MovieController_1.default.borraTuPelicula);
        this.apiRutaMovie.put("/actualizalo", MovieController_1.default.actualiceTuPelicula);
    }
}
const movieRutas = new MovieRutas();
exports.default = movieRutas.apiRutaMovie;
