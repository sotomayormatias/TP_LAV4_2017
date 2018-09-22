import { Juego, estadoJuego } from '../clases/juego';

export class JuegoAgilidad extends Juego{
    primerNumero:number;
    segundoNumero:number;
    operador:string;
    numeroIngresado:number;

    constructor(nombre?: string, estado?:estadoJuego, jugador?:string) {
        super("Velocidad Aritmetica", estado, jugador);
    }

    public verificar() {
        if(this.obtenerResultado() == this.numeroIngresado) {
            this.estado = estadoJuego.gano;
        }
        else {
            this.estado = estadoJuego.perdio;
        }
        return this.estado == estadoJuego.gano;
    }

    public obtenerResultado():number {
        let resultado:number;
        switch (this.operador){
            case "+":
                resultado = this.primerNumero + this.segundoNumero;
            break;
            case "-":
                resultado = this.primerNumero - this.segundoNumero;
            break;
        }
        return resultado;
    }
}