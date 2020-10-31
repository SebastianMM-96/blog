import { Component, OnInit, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { Input, Output} from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, pelicula){
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
