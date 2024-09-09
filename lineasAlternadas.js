/* Escribe tu código aquí */
function lineasAlternadas(filas,columnas){
    for(i = 0; i< filas; i++){
        if(i % 2 === 0){
            console.log('*'.repeat(columnas));
        }else{
            console.log(' '.repeat(columnas));
        }
    }
}
 

/* Fin  */

lineasAlternadas(4,6)
lineasAlternadas(5,2)
lineasAlternadas(1,3)