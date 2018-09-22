import { Juego, estadoJuego } from '../clases/juego';

export class JuegoPiedraPapelTijera extends Juego {
    eleccionUsuario: string;
    eleccionMaquina: string;
    puntajeUsuario: number;
    puntajeMaquina: number;
    private elecciones: Array<string> = ["piedra", "papel", "tijera"];

    constructor(nombre?: string, estado?: estadoJuego, jugador?: string) {
        super("Piedra Papel o Tijeras", estado, jugador);
        this.puntajeUsuario = 0;
        this.puntajeMaquina = 0;
    }

    public generarEleccion() {
        this.eleccionMaquina = this.elecciones[Math.floor(Math.random() * 3)];
        console.info('eleccion maquina:' + this.eleccionMaquina);
    }

    public obtenerResultado() {
        switch (this.eleccionUsuario) {
            case "piedra":
                if (this.eleccionMaquina == "piedra")
                    this.estado = estadoJuego.empato;
                else if (this.eleccionMaquina == "papel")
                    this.estado = estadoJuego.perdio;
                else
                    this.estado = estadoJuego.gano;
                break;
            case "papel":
                if (this.eleccionMaquina == "piedra")
                    this.estado = estadoJuego.gano;
                else if (this.eleccionMaquina == "papel")
                    this.estado = estadoJuego.empato;
                else
                    this.estado = estadoJuego.perdio;
                break;
            case "tijera":
                if (this.eleccionMaquina == "piedra")
                    this.estado = estadoJuego.perdio;
                else if (this.eleccionMaquina == "papel")
                    this.estado = estadoJuego.gano;
                else
                    this.estado = estadoJuego.empato;
                break;
        }

        return this.estado;
    }

    public verificar() {
        if (this.puntajeUsuario == 3 && this.puntajeMaquina < 3)
            return true;
        else if (this.puntajeMaquina == 3 && this.puntajeUsuario < 3)
            return false;
        else
            return null;
    }

}
