import { preguntar } from './lib/consola.ts';
let tamañoPrefijo : string = preguntar("Cuantos digitos tiene tu tarjeta");

function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {
  return Math.floor(numero / 10 ** (16- tamañoPrefijo));
}

let tarjetaTexto: string = preguntar('Ingresa el numero de tarjeta: ');


let red: string = "No es un numero valido"

if (Number(tamañoPrefijo)===2){
  if (obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo))===34 ||obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 37){
    red="Amex"
  }
  else if (obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo))===51 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 52 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 53 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 54 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 55){
    red="Mastercard"
  }
  else{
    red = "No es un numero valido"
  }
}
else if (Number(tamañoPrefijo)===1){
  
  if (obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo))===4){
    red="VISA"
  }
  else{
    "No es un numero valido"
  }
}

console.log(red);
//Tiene error, algún día lo soluciono :)
