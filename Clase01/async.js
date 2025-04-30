async function taskSlow() {
    console.log('Está iniciando la tarea!!');
    
    await new Promise (resolve => {
        setTimeout(() => {
            console.log('Tarea terminada en 5 segundos');
            resolve()
        }, 5000)
    })
    console.log('Terminó la tarea');
}

taskSlow()