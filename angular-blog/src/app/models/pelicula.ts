/**
 * Molde con propiedades de una pelicula
 * es necesario exportarlo para usarlo
 */
export class Pelicula{
    /*
    public title: string;
    public year: number;
    public image: string;

    constructor(title, year, image){
        this.title = title;
        this.year = year;
        this.image = image;
    }
    */

    //Para ahorrar tiempo y no escribir demasiado
    /**
     * Asi se definen los modelos en angular
     */
    constructor(
        public title: string,
        public year: number,
        public image: string
    ){}
}