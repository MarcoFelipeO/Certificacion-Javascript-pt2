function cuadradoHueco(n) {
    if (n < 1) return; // Si el número es menor a 1, no se muestra nada

    // Primera fila (completamente llena de asteriscos)
    console.log('*'.repeat(n));
    
    // Filas intermedias (si n > 2)
    for (let i = 0; i < n - 2; i++) {
        console.log('*' + ' '.repeat(n - 2) + '*');
    }

    // Última fila (completamente llena de asteriscos si n > 1)
    if (n > 1) {
        console.log('*'.repeat(n));
    }
    
}
