export class RegistroSesion {
    public nombresUsuario: string;
    public apellidosUsuario: string;
    public correoAcceso: string;
    public claveAcceso: string;
    public reClaveAcceso?: string;

    constructor(nom: string, ape: string, corr: string, cla: string) {
        this.nombresUsuario = nom;
        this.apellidosUsuario = ape;
        this.correoAcceso = corr;
        this.claveAcceso = cla;
    }

}
