import {Component} from '@angular/core';

@Component({
    //Lleva dos propiedades escenciales
    selector: 'mi-componente',
    //templates
    /**
     * Binding por interpolacion {{<nombre de la variable>}}
     */
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{


    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = 'Hola Mundo';
        this.comentario = 'Este es un comentario';
        this.year = 2020;
        this.mostrarPeliculas = true;
        console.log("Componente cargado");
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}