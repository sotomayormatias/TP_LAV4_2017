import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  operaciones: Array<string> = ["+", "-"];
  resultado: number;
  private subscription: Subscription;

  ngOnInit() {
  }

  constructor() {
    this.ocultarVerificar = true;
    this.Tiempo = 20;
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");
  }

  NuevoJuego() {
    this.ocultarVerificar = false;
    this.nuevoJuego.numeroIngresado = null;
    this.nuevoJuego.primerNumero = Math.floor(Math.random() * 100) + 1;
    this.nuevoJuego.segundoNumero = Math.floor(Math.random() * 100) + 1;
    this.nuevoJuego.operador = this.operaciones[Math.floor(Math.random() * 2)];

    this.repetidor = setInterval(() => {
      this.Tiempo--;
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
      }
    }, 900);

  }

  verificar() {
    console.log("verifica");
    this.ocultarVerificar = true;
    clearInterval(this.repetidor);
    this.Tiempo = 20;
    this.nuevoJuego.verificar();
    this.resultado = this.nuevoJuego.obtenerResultado();
  }
}
