function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

function procesarUsuario(nombre, callback){
    callback(nombre);
}

function despedir(nombre){
    console.log(`Adios ${nombre}`);
}

procesarUsuario('Joel', saludar)
procesarUsuario('Joel', despedir)