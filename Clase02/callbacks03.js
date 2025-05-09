// CALLBACK - HELL

loginUser( user, function (err, users){
    if(err){
        console.log(err);
    }else{
        obtenerDatos(users, id, function(err, datos){
            if(err){
                console.log(err)
            } else {
                procesarDatos(datos, function(err, resultado){
                    if(err){
                        console.log(err)
                    } else {
                        loginUser
                    }
                })
            }
        })
    }
})

// La función anterior es un caos, veamos la forma moderna
async function Todo() {
    try{
        const user = await loginUser(user)
        const datos = await obtenerDatos(user, id)
        const resultado = await procesarDatos(datos)
        console.log('Todo listo', resultado);
    } catch(error){
        console.error(error)
    }
}

Todo()