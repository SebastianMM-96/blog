import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import {PeliculaService} from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;

  
  constructor( private _peliculaService: PeliculaService ) {
    this.titulo = 'Componente peliculas';
    this.peliculas = this._peliculaService.getPeliculas();
   }

  //metodos del ciclo de vida
  //este es un hook
  ngOnInit(): void {
    //Aqui se pueden indexar funcionalidades
    console.log(this.peliculas);
    console.log('Evento OnInit lanzado/Componente Iniciado');
    console.log(this._peliculaService.holaMundo());
  }

  /**
   * Algunos metodos del ciclo de vida
  */
  ngDoCheck(){
    console.log('DoCheck lanzado');
  }

  cambiarTitulo(){
    this.titulo = 'El titulo se cambio';
  }

  /**
   * OnDestroy otro metodo 
   * Este avisa de que se elimina el componente
  */
  ngOnDestroy(){
    console.log('El componente sera destruido');
  }

  /*
  * Componente padre
  */ 
  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
