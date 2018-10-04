import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { JuegoLogoQuiz } from '../../clases/juego-logo-quiz';
import { estadoJuego } from '../../clases/juego';

@Component({
  selector: 'app-logo-quiz',
  templateUrl: './logo-quiz.component.html',
  styleUrls: ['./logo-quiz.component.css']
})
export class LogoQuizComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  Juego: JuegoLogoQuiz;
  ImagenesMezcladas: Array<any>;
  IdImagen: number = 0;
  PathImagen: string;
  Mensajes: string;

  constructor() {
    this.Juego = new JuegoLogoQuiz();
    this.Juego.estado = estadoJuego.gano;
  }

  ngOnInit() {
  }

  nuevoJuego() {
    this.ImagenesMezcladas = new Array();
    this.Juego.estado = estadoJuego.jugando;
    this.obtenerImagenes();
    this.nuevaImagen();
  }

  nuevaImagen() {
    this.PathImagen = "../../../assets/imagenes/logos/" + this.ImagenesMezcladas[this.IdImagen].id + ".jpg";
    this.Juego.nombreMarca = this.ImagenesMezcladas[this.IdImagen].nombre;
    this.IdImagen++;
    this.Juego.nombreIngresado = "";
  }

  obtenerImagenes() {
    for (let a = this.Juego.imagenes, i = a.length; i--;) {
      let random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
      this.ImagenesMezcladas.push(random);
    }
  }

  verificarMarca() {
    if (this.Juego.nombreMarca == this.Juego.nombreIngresado) {
      this.MostarMensaje("Ganaste!!", true);
      this.sonidoGanador();
      this.nuevaImagen();
    } else {
      this.MostarMensaje("No ganaste");
      this.nuevaImagen();
    }
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
    }, 3000);
    console.info("objeto", x);
  }

  sonidoGanador() {
    let audio = new Audio("../../../assets/sonidos/win.mp3");
    // audio.src = ;
    audio.load();
    audio.play();
  }

}
