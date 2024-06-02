export class Ciudad {
    public _id: string;
    public nombreCiudad: string;
    public publicoFotoCiudad: string;
    public privadoFotoCiudad: string;
    public estadoCiudad: number;
    public base64Ciudad: string;

    constructor(cod: string, nom: string, pub: string, pri: string, est: number, base: string) {
        this._id = cod;
        this.nombreCiudad = nom;
        this.publicoFotoCiudad = pub;
        this.privadoFotoCiudad = pri;
        this.estadoCiudad = est;
        this.base64Ciudad = base;
    }

    static fromJson(json: Ciudad): Ciudad {
        return new Ciudad(
            json._id,
            json.nombreCiudad,
            json.publicoFotoCiudad,
            json.privadoFotoCiudad,
            json.estadoCiudad,
            json.base64Ciudad,

        )
    }
};