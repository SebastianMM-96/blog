import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Global} from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    //console.log(this._articleService.pruebas());
    this._articleService.getArticles().subscribe(
      response =>{
        //article, status
        //console.log(response);
        if(response.articles){
          //datos adjuntos
          this.articles = response.articles;
        }else{
          //vacio
        }
      }, 
      error => {
        console.log(error);
       }
    );
  }

}