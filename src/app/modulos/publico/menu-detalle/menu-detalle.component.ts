import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-detalle',
  templateUrl: './menu-detalle.component.html',
  styleUrls: ['./menu-detalle.component.css']
})
export class MenuDetalleComponent {
  public _id: string = '';
  constructor(public route: ActivatedRoute){

  }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      this._id = String(params.get("cod"));
      console.log(this._id);
      if (this._id && this._id !== 'null') {
        await this.cargarMenu(this._id);
      }
    })
  }

  public async cargarMenu(codCity: string):Promise<void>{

  }
}
