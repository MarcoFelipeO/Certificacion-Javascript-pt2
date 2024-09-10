/* Escribe tu código aquí */
function media_piramide_izquierda(altura) {
    for (let i = 1; i <= altura; i++) {
        let linea = '';
        
        // Agregar los espacios en blanco
        for (let j = 1; j <= (altura - i); j++) {
            linea += ' ';
        }
        
        // Agregar los asteriscos
        for (let k = 1; k <= i; k++) {
            linea += '*';
        }
        
        console.log(linea);  // Imprimir la línea de la pirámide
    }
}



/* Fin */

media_piramide_izquierda(4)
media_piramide_izquierda(2)
media_piramide_izquierda(1)
media_piramide_izquierda(6)