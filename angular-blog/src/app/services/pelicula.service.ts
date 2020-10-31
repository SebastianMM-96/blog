import {Injectable} from '@angular/core';
import {Pelicula} from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Tenet", 2020, 'http://www.rockaxis.com/img/newsList/5249698.jpg'),
            new Pelicula("La isla siniestra", 2001, 'https://angelesteban.files.wordpress.com/2010/03/shutter-island-release.jpg?w=1920&h=768&crop=1'),
            new Pelicula("El Origen", 2018, 'http://2.bp.blogspot.com/-uZUMCsz_H4M/TWaqInlGSmI/AAAAAAAABbc/2Xbu9kylMrQ/s1600/Inception-Widescreen-Wallpaper-1920x1200-2.jpg'),
            new Pelicula("Batman Begins", 2005, 'https://fotografias.antena3.com/clipping/cmsimages01/2012/06/05/17EC32C9-2058-4E06-9258-2049CC82787B/58.jpg')
          ];
    }

    holaMundo(){
        return 'Hola mundo desde el servicio de Angular';
    }

    /**
     * Servicio para obtener las peliculas
     * desde un provider que es esta funcion
     */

    getPeliculas(){
        return this.peliculas;
    }

}
