import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar('¿Que palabra desea cifrar/descifrar? '); // Preguntar por la palabra a cifrar o descifrar
let claveTexto: string = preguntar('¿Cual es la clave de cifrado? '); // Preguntar por la clave de cifrado (número)
let accion: string = preguntar('¿Desea cifrar o descifrar la palabra? '); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)

let resultado: string = '';

if (accion==='cifrar' || accion==='Cifrar'){

resultado = cifrar(palabra, Number(claveTexto));
console.log('La palabra es' + resultado);

}
else if (accion==='descifrar' || accion==='Descifrar'){

resultado=descifrar(palabra, Number(claveTexto));

console.log('La palabra es: ' + resultado);

}
else{

    console.log('El código no funciona como vos querés. Reintentá poniendo un valor válido')

}


