const MODULO_DNI = 23;
let numerosDNI = 0;
const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

numerosDNI = 25421542;

function isNumber (DNI) {
    return typeof DNI == "number";
}

// Validar que sea un numero y que sea un numero igual a 8.
while (!(isNumber(numerosDNI)) || (!(numerosDNI.toString().length == 8))) {
    numerosDNI = prompt(`Error: 
    1.- DNI debe ser solo numeros.
    2.- DNI debe contener 8 digitos.
    Reintente de nuevo`);
}

const letraDNI = numero => numero % MODULO_DNI;
console.log(letras[letraDNI]);

console.log(`Su DNI es: ${numerosDNI}-${letras[letraDNI]}`);