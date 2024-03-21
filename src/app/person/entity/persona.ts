class Persona {

    public idPersona: number;
    public idRolPersona: number;
    public primerNombrePersona: string;
    public segundoNombrePersona: string;
    public primerApellidoPersona: string;
    public segundoApellidoPersona: string;
    public correoElectronicoPersona: string;
    public clavePersona: string;

    constructor(idpersona: number, idrolp: number, primernpersona: string, segundonpersona: string, primerapersona: string, segundoapersona: string, correoepersona: string, clavepersona: string) {

        this.idPersona = idpersona;
        this.idRolPersona = idrolp;
        this.primerNombrePersona = primernpersona;
        this.segundoNombrePersona = segundonpersona;
        this.primerApellidoPersona = primerapersona;
        this.segundoApellidoPersona = segundoapersona;
        this.correoElectronicoPersona = correoepersona;
        this.clavePersona = clavepersona;

    }

}