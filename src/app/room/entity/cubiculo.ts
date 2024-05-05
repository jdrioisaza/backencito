class Cubiculo {

    public idCubiculo: number;
    public numeroCubiculo: number;
    public capacidadMaximaCubiculo: number;
    public urlImagenCubiculo: string;

    constructor(id: number, numcubiculo: number, cmaxcubiculo: number, urlimgcubiculo: string) {

        this.idCubiculo = id;
        this.numeroCubiculo = numcubiculo;
        this.capacidadMaximaCubiculo = cmaxcubiculo;
        this.urlImagenCubiculo = urlimgcubiculo;

    }

}

export default Cubiculo;