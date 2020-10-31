import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() { 
    this.user = {
      nombre: '',
      apellido: '',
      bio: '',
      genero: ''
    };
   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('formulario enviado');
    console.log(this.user);
  }

  /**
   * Evento click
   */
  hasDadoClick(){
    alert('Has dado click');
  }
  /**
   * Evento blur
   */
  hasSalido(){
    alert('Has dado ENTER');
  }



}
