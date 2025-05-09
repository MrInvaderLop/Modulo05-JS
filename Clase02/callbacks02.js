function duplicar(numero, callback){
    let resultado = numero * 2
    callback(resultado)
}

function duplicado(resultado){ // Función Callback
    console.log(('El número duplicado es:', resultado))
}

duplicar(25, duplicado)