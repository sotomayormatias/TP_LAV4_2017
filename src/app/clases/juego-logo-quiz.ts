import { Juego, estadoJuego } from '../clases/juego';

export class JuegoLogoQuiz extends Juego {
    nombreIngresado: string;
    nombreMarca: string;
    imagenes: {id: number, nombre: string}[] = [
        {id: 1, nombre: "adidas"}, {id: 2, nombre: "agfa"}, {id: 3, nombre: "alfa romeo"},
        {id: 4, nombre: "apple"}, {id: 5, nombre: "atari"}, {id: 6, nombre: "audi"},
        {id: 7, nombre: "basf"}, {id: 8, nombre: "bic"}, {id: 9, nombre: "bmw"},
        {id: 10, nombre: "bp"}, {id: 11, nombre: "burger king"}, {id: 12, nombre: "cadillac"},
        {id: 13, nombre: "camel"}, {id: 14, nombre: "carrefour"}, {id: 15, nombre: "castrol"},
        {id: 16, nombre: "champions"}, {id: 17, nombre: "chupa chups"}, {id: 18, nombre: "citroen"},
        {id: 19, nombre: "coca cola"}, {id: 20, nombre: "corona"}, {id: 21, nombre: "dell"},
        {id: 22, nombre: "dolce gabanna"}, {id: 23, nombre: "esso"}, {id: 24, nombre: "fanta"},
        {id: 25, nombre: "fedex"}, {id: 26, nombre: "ferrari"}, {id: 27, nombre: "firefox"},
        {id: 28, nombre: "ford"}, {id: 29, nombre: "gatorade"}, {id: 30, nombre: "good year"},
        {id: 31, nombre: "google"}, {id: 32, nombre: "harley davidson"}, {id: 33, nombre: "heineken"},
        {id: 34, nombre: "hewlett packard"}, {id: 35, nombre: "honda"}, {id: 36, nombre: "ibm"},
        {id: 37, nombre: "internet explorer"}, {id: 38, nombre: "juegos olimpicos"}, {id: 39, nombre: "kappa"},
        {id: 40, nombre: "kinder"}, {id: 41, nombre: "lacoste"}, {id: 42, nombre: "le coq sportif"},
        {id: 43, nombre: "lg"}, {id: 44, nombre: "linux"}, {id: 45, nombre: "lucky strike"},
        {id: 46, nombre: "marca"}, {id: 47, nombre: "marlboro"}, {id: 48, nombre: "mc donald"},
        {id: 49, nombre: "mercedes benz"}, {id: 50, nombre: "mgm"}, {id: 51, nombre: "michelin"},
        {id: 52, nombre: "mirinda"}, {id: 53, nombre: "motorola"}, {id: 54, nombre: "movistar"},
        {id: 55, nombre: "nestle"}, {id: 56, nombre: "nike"}, {id: 57, nombre: "nokia"},
        {id: 58, nombre: "opel"}, {id: 59, nombre: "panam"}, {id: 60, nombre: "pepsi"},
        {id: 61, nombre: "peugeot"}, {id: 62, nombre: "philips"}, {id: 63, nombre: "playboy"},
        {id: 64, nombre: "playstation"}, {id: 65, nombre: "porsche"}, {id: 66, nombre: "puma"},
        {id: 67, nombre: "red bull"}, {id: 68, nombre: "renault"}, {id: 69, nombre: "repsol"},
        {id: 70, nombre: "seven up"}, {id: 71, nombre: "shell"}, {id: 72, nombre: "sol"},
        {id: 73, nombre: "sony ericcson"}, {id: 74, nombre: "suzuki"}, {id: 75, nombre: "texaco"},
        {id: 76, nombre: "tommy hilfiger"}, {id: 77, nombre: "vodafone"}, {id: 78, nombre: "volkswagen"},
        {id: 79, nombre: "warner bros"}, {id: 80, nombre: "wella"}, {id: 81, nombre: "windows"},
        {id: 82, nombre: "xbox"}, {id: 83, nombre: "yamaha"}
    ]; 

    constructor(nombre?: string, estado?:estadoJuego, jugador?:string) {
        super("Logo Quiz", estado, jugador);
    }

    public verificar() {
        if(this.nombreIngresado == this.nombreMarca) {
            this.estado = estadoJuego.gano;
        }
        else {
            this.estado = estadoJuego.perdio;
        }
        return this.estado == estadoJuego.gano;
    }
}
