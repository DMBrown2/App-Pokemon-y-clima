
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
    const pokemonListHTML = document.getElementById('pokemon-list')
    
    //2. Borrar el contenido del contenedor.
    arrayPokemones.forEach(pokemon => {

    })

    //3. Recorrer el array de pokemones con un foreach.

}










function crearCardPokemon(){

}