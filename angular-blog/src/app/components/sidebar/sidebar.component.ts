import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchString: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goSearch(){
    //Realizar busqueda utilizando el OnSubmit
    //redireccion
    //alert(this.searchString);
    this._router.navigate(['/buscar', this.searchString]);
  }

}
