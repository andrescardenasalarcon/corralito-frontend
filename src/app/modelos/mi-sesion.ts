export class MiSesion {

    public codMiSesion: string;
    public correoMiSesion: string;
    public rolMiSesion: string;
    public ciudadMiSesion: string;
    public nombresMiSesion: string;
    public apellidosMiSesion: string;

    constructor(cod: string, corr: string, rol: string, ciu: string, nomb:string, apell: string) {
        this.codMiSesion = cod;
        this.correoMiSesion = corr;
        this.rolMiSesion = rol;
        this.ciudadMiSesion = ciu;
        this.nombresMiSesion = nomb;
        this.apellidosMiSesion = apell;
    }


}
