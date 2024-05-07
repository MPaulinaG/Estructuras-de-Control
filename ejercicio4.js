var año = prompt("Ingrese un año:");
año = parseInt(año);


if (año % 4 === 0) {
    
    if (año % 100 !== 0 || (año % 100 === 0 && año % 400 === 0)) {
        document.write (año + " es un año bisiesto.");
    } else {
        document.write (año + " no es un año bisiesto.");
    }
} else {
    document.write (año + " no es un año bisiesto.");
}
