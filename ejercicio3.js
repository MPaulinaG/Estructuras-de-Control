
var Edades = 0;
for (var i = 1; i <= 5; i++) {
    var edad = parseInt(prompt("Ingresa la edad de la persona " + i + ":"));
    
    if (edad > 0) {
        Edades += edad;
    } else {
        alert("La edad ingresada no es válida.");
        i--; 
    }
}
var edadPromedio = Edades / 5;

if (edadPromedio >= 18) {
    document.write ("La edad promedio es " + edadPromedio + " años, que es mayor o igual a la mayoría de edad.");
} else {
    document.write ("La edad promedio es " + edadPromedio + " años, que es menor a la mayoría de edad.");
}
