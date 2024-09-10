function diagonal_cuadrado(n) {
    for (let i = 0; i < n; i++) {
        let linea = '';
        for (let j = 0; j < n; j++) {
            if (i === j) {
                linea += '*';  // Agregamos el asterisco en la posición de la diagonal
            } else {
                linea += ' ';  // Agregamos espacios en el resto
            }
        }
        console.log(linea);  // Imprimimos la línea completa
    }
}
