import { Juego, estadoJuego } from '../clases/juego'

export class JuegoAdivina extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    constructor(nombre?: string, estado?:estadoJuego, jugador?:string) {
      super("Adivina el número", estado, jugador);  
    }

    public verificar() {
      if (this.numeroIngresado == this.numeroSecreto) {
        this.estado = estadoJuego.gano;
      }
      return this.estado == estadoJuego.gano;
    }

    public generarnumero() {
      this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
      console.info('numero Secreto:' + this.numeroSecreto);
    }

    public retornarAyuda() {
      if (this.numeroIngresado < this.numeroSecreto) {
        return "Falta";
      }
      return "Te pasate";
    }
}