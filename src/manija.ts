import { preguntar } from './lib/consola.ts';
let tamañoPrefijo : string = preguntar("Cuantos digitos queres analizar")
function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {
  return Math.floor(numero / 10 ** (16- tamañoPrefijo));
}

let tarjetaTexto: string = preguntar('Ingresa el numero de tarjeta: ');


let red: string = "No es un numero valido"

if (Number(tamañoPrefijo)===2){
  if (obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo))===34 ||(Number(tarjetaTexto), Number(tamañoPrefijo)) === 37){
    red="Amex"
  }
  else if (obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo))===51 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 52 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 53 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 54 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 55){
    red="Mastercard"
  }
  else if (obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo))===40 || (Number(tarjetaTexto), Number(tamañoPrefijo))===41 || (Number(tarjetaTexto), Number(tamañoPrefijo))===42 || (Number(tarjetaTexto), Number(tamañoPrefijo))===43 || (Number(tarjetaTexto), Number(tamañoPrefijo))===44 || (Number(tarjetaTexto), Number(tamañoPrefijo))===45 || (Number(tarjetaTexto), Number(tamañoPrefijo))===46 || (Number(tarjetaTexto), Number(tamañoPrefijo))===47 || (Number(tarjetaTexto), Number(tamañoPrefijo))===48 || (Number(tarjetaTexto), Number(tamañoPrefijo))===49){
    red="VISA"
  }
  else{
    red = "No es un numero valido"
  }
  if (obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo))===40 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 41 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 42 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 43 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 44 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 45 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 46 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 47 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 48 || (Number(tarjetaTexto), Number(tamañoPrefijo)) === 49){
    console.log("Hola")
    console.log(obtenerPrefijo (Number(tarjetaTexto), Number(tamañoPrefijo)))
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
