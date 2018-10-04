import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { estadoJuego } from '../../clases/juego';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  Juego: JuegoPiedraPapelTijera;
  Mensajes: string;

  constructor() {
    this.Juego = new JuegoPiedraPapelTijera();
  }

  Jugar(eleccionUsuario: string) {
    this.Juego.generarEleccion();
    this.Juego.eleccionUsuario = eleccionUsuario;
    if (this.Juego.obtenerResultado() == estadoJuego.gano)
      this.Juego.puntajeUsuario++;
    else if (this.Juego.obtenerResultado() == estadoJuego.perdio)
      this.Juego.puntajeMaquina++;

    if (this.Juego.verificar() == true) {
      this.MostarMensaje("Ganaste!!", true);
      this.generarNuevoJuego();
    }
    else if (this.Juego.verificar() == false){
      this.MostarMensaje("no ganaste");
      this.generarNuevoJuego();
    }
  }

  generarNuevoJuego(){
    this.Juego = new JuegoPiedraPapelTijera();
  }

  MostarMensaje(mensaje: string = "este es el mensaje", ganador: boolean = false) {
    this.Mensajes = mensaje;
    var x = document.getElementById("snackbar");
    if (ganador) {
      x.className = "show Ganador";
    } else {
      x.className = "show Perdedor";
    }
    
    setTimeout(function () {
      x.className = x.className.replace("show", "");
      // alert("hola");
    }, 3000);
    console.info("objeto", x);
  }

  ngOnInit() {
  }

}
