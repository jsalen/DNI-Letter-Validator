const MODULO_DNI = 23;
let numerosDNI = 0;
const LETRAS = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

numerosDNI = parseInt(prompt("Inserte numero de DNI"));

// Validar que sea un numero y que sean 8 digitos.
while ((numerosDNI.toString().length !== 8) || !(Number.isInteger(numerosDNI))) {
    numerosDNI = parseInt(prompt(`Error:
    1.- DNI debe ser solo numeros.
    2.- DNI debe contener 8 digitos.
    Reintente de nuevo`));
}

const letraDNI = numero => numero % MODULO_DNI;

console.log(`Su DNI es: ${numerosDNI}-${LETRAS[letraDNI(numerosDNI)]}`);