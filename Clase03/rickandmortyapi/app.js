document.addEventListener('DOMContentLoaded', () => { //Para ejecutar todo lo que tenga el DOM
    const container = document.getElementById('characterContainer');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const personajes = data.results;
        personajes.forEach(personaje => {
            const card = document.createElement('section');
            card.classList.add('card') // Añadiendo una sección, añadiendo clas CSS al elemento Card

            const image = document.createElement('img') //Creando etiqueta img en el HTML
            image.src = personaje.image

            const name = document.createElement('h2') // Literalmente haciendo la página con JS
            name.textContent = personaje.name

            card.appendChild(image) // Abre elementos hijos a Card
            card.appendChild(name)

            container.appendChild(card)
        })
    }) 
    .catch(error => {
        console.error('Error fetching data', error)
        container.innerHTML = '<p>Falló la carga de personajes</p>'
    })
})   // TAREA: Añadir Estilos CSS a la página como en la original https://rickandmortyapi.com/
//continuar el proceso desde las 7:50 pm para nstalar paquetes.