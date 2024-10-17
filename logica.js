const prompt = require("prompt-sync")();
let secretNumber = 72;
let intentos = [];
let numero;
function pedirNumero() {
    numero = Number(prompt("Adivina el número secreto (está entre 1 y 100): "));
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
        pedirNumero();
    } else {
        intentos.push(numero);
        if (numero === secretNumber) {
            console.log("¡Felicidades!, adivinaste el número secreto.");
            console.log("Los números introducidos fueron: " + intentos.join(", "));
        } else {
            console.log("El número secreto es incorrecto :(, vuelve a intentarlo :).");
            pedirNumero();
        }
    }
}
pedirNumero();