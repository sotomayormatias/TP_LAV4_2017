export enum estadoJuego { "gano", "perdio", "jugando", "empato" };

export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public estado = estadoJuego.jugando;

  constructor(nombre?: string, estado?: estadoJuego, jugador?: string) {
    if (nombre)
      this.nombre = nombre;

    if (estado)
      this.estado = estado;

    if (jugador)
      this.jugador = jugador;
    else
      this.jugador = "natalia natalia";
  }

  public abstract verificar(): boolean;

  public retornarAyuda() {
    return "NO hay ayuda definida";
  }
}
