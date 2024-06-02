export class Producto {
    public codProducto: string;
    public nombreProducto: string;
    public detalleProducto: string;
    public valorProducto: number;
    public publicoFotoProducto: string;
    public privadoFotoProducto: string;
  public base64Producto: string;
  
    constructor(codP: string, nom: string, det: string, val: number, pub: string, priv: string, base: string) {
      this.codProducto = codP;
      this.nombreProducto = nom;
      this.detalleProducto = det;
      this.valorProducto = val;
      this.publicoFotoProducto = pub;
      this.privadoFotoProducto = priv;
      this.base64Producto = base;
    }

}
