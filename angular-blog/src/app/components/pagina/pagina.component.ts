import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellidos: string;

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router
  ) { 

   }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
    });
  }

  redireccion(){
    /**
     * Usamos el navigate el cual permite la navegacion de una pagina 
     * a otra por medio en este caso de un boton desde la vista del componente 
     * pagina de prueba
     */
    this._router.navigate(['/pagina-de-pruebas', 'sebastian', 'marroquin']);
  }

}
