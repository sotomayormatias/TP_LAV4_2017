import { Injectable } from '@angular/core';
import { Juego, estadoJuego } from '../clases/Juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { MiHttpService } from './mi-http/mi-http.service'; 

@Injectable()
export class JuegoServiceService {

  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    this.peticion = this.miHttp.httpGetO("http://localhost:3003");
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }

  public listar(): Array<Juego> {
   this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
    .then( data => {
      console.log( data );
    })
    .catch( err => {
      console.log( err );
    });
   
  
    this.peticion
    .subscribe( data => {
      console.log("En listar");
      console.log( data );
    }, err => {
      console.info("error: " ,err );
    })

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Juego 1", estadoJuego.gano));
    miArray.push(new JuegoAdivina("Pepe", estadoJuego.gano));
    miArray.push(new JuegoAdivina("Juego 3", estadoJuego.perdio));
    miArray.push(new JuegoAdivina("Juego 4", estadoJuego.perdio));
    miArray.push(new JuegoAdivina("Juego 5", estadoJuego.perdio));
    miArray.push(new JuegoAdivina("Juego 6", estadoJuego.perdio));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
    .subscribe( data => {
      console.log("En listarPromesa");
      console.log( data );
    }, err => {
      console.log( err );
    })
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", estadoJuego.perdio,"promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", estadoJuego.gano));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", estadoJuego.perdio));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", estadoJuego.perdio));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", estadoJuego.perdio));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", estadoJuego.perdio));
      resolve(miArray);
    });

    return promesa;
  }

}
