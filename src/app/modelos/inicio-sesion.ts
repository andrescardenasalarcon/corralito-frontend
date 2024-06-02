export class InicioSesion {

    public correoAcceso: string;
    public claveAcceso: string;
    
    constructor(nom:string,cla:string){
        this.correoAcceso = nom;
        this.claveAcceso = cla;
    }

}
