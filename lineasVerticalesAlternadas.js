/* Escribe tu código aquí */


function lineasVerticalesAlternadas(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        let linea = '';
        for (let j = 0; j < columnas; j++) {
            if (j % 2 === 0) {
                linea += '*';  // Columnas pares llevan asteriscos
            } else {
                linea += ' ';  // Columnas impares llevan espacios
            }
        }
        console.log(linea);  // Muestra la línea completa en la consola
    }
}


/* Fin */

lineasVerticalesAlternadas(4,5)
lineasVerticalesAlternadas(2,3)
lineasVerticalesAlternadas(1,6)
lineasVerticalesAlternadas(5,1)