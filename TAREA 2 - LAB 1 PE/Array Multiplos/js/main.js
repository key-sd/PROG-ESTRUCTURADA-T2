//Creamos la función que contiene parametros solicitados
function numMultiplos(num, length) {
    const result = [];
    for (let i = 1; i <= length; i++) {
        result.push(num * i);
    }
    return result;
}

const num = parseInt(prompt("Ingresa un número que quieras saber sus multiplos:"));
const length = parseInt(prompt("Ingresa la cantidad de multiplos que quieres ver:"));

//Realizamos validación de datos
if (!isNaN(num) && !isNaN(length)) {
    const multiplesArray = numMultiplos(num, length);
    console.log(`El array de multiplos de ${num} es`, multiplesArray);
} else {
    alert('Ingresa solo valores numéricos :D');
}