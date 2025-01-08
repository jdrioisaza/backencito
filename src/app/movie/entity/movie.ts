class Movie{
    idPelicula: number;
    nombrePelicula: string;
    fechaEstreno: string;
    duracion:string;
    idCategoria: number;

    constructor(idPelicula: number, nombrePelicula: string, fechaEstreno: string, duracion: string, idCategoria: number){
        this.idPelicula = idPelicula;
        this.nombrePelicula = nombrePelicula;
        this.fechaEstreno = fechaEstreno;
        this.duracion = duracion;
        this.idCategoria = idCategoria;
    }
}

export default Movie;