const axios = require('axios');




module.exports = {
    getWildPokemon: (req, res) => { //handler functions will use req and res to get random pokemon from the API
        const pokemonArray = []; //creates an empty array to store pokemon as we pull from API
        //Can add random number generator to get different pokemon later

    
       


        axios.get(`https://pokeapi.co/api/v2/pokemon/1`) //handler function  add ${rand1} instead of 1 to use random api generator
            .then(response => { //response can also be abreviated as res as seen in many tutorials
                pokemonArray.push(response.data);
                axios.get(`https://pokeapi.co/api/v2/pokemon/2`) //You must make a single request at a time because that is how the pokeAPI is structured
                    .then(response => {
                        pokemonArray.push(response.data);
                        axios.get(`https://pokeapi.co/api/v2/pokemon/3`)
                            .then(response => {
                                pokemonArray.push(response.data);
                                res.status(200).send(pokemonArray)              //Send to client side. The status gives a number response to tell us if it was received ok
                            }) //Ask Mento why res.status works but response.status does not
                    })
            })
    }
}

//Handler functions always go in controller files

