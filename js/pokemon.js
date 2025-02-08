
let pokemones = []
const URL_API = 'https://pokeapi.co/api/v2/'

function obtenerPokemones() {
    //1. Hacer una petición al servidor con un método asíncrono con axios.
    axios.get(`${URL_API}/pokemon`).then(response => {
        console.log(response)

        //2.Guardar la respuesta en la variable pokemones.
        pokemones = response.data.results
        console.log(pokemones)
        //3. Pintar los pokemones en el html.
        pintarPokemones(pokemones)
    })
        .catch(error => {
            console.log(error)
            console.error(`Error al obtener los pokemones`)
        })

}

obtenerPokemones()

function pintarPokemones(arrayPokemones) {
    //1.Seleccionar el contenedor de los pokemones
    const pokemonListHTML = document.getElementById('poke')

    //2. Borrar el contenido del contenedor.
    
    //3. Recorrer el array de pokemones con un foreach.
    arrayPokemones.forEach(pokemon => {

        const ID = extraerPokemonID(pokemon.url)

        // pokemonListHTML.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        // ${pokemon.name} <a href="/pages/detail.html?pokemon=${ID}" class="btn btn-primary btn-sm">Ver</a> </li>`

        const listItem = document.createElement('li')
        console.dir(listItem)

        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

        listItem.innerText = pokemon.name

        pokemonListHTML.appendChild(listItem)

    })
}

function extraerPokemonID(url) {

            //4. Crear un elemento HTML por cada pokemon.

            // const urlSplit = url.split('/')
            // const pokemonID = urlSplit.at(-2)
            const pokemonID = url.split('/').at(-2) //Otra forma de hacerlo.
            return pokemonID
}





function crearCardPokemon() {

}