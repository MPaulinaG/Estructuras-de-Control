let numero1 = parseFloat(prompt("Ingrese un número:"));
let numero2 = parseFloat(prompt("Ingrese otro número:"));
let operacion = prompt("Ingrese una operación (Suma, resta, multiplicación, división):");

if (operacion == "+") {
    document.write(numero1 + numero2);
} else if (operacion == "-") {
    document.write(numero1 - numero2);
}