import { preguntar } from './lib/consola.ts';
let tamañoPrefijo : number = 2;
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
  else if (obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo))===40 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===41 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===42 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===43 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===44 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===45 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===46 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===47 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===48 || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo))===49){
    red="VISA"
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
