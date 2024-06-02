export class RespuestaInicioSesion {
    public token: string;
    public base64Usuario: string;

    constructor(tok:string,fot:string){
        this.token = tok;
        this.base64Usuario = fot;
    }
}
