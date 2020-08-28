const axios = require('axios');



module.exports = {
    getWildPokemon: (req, res) => { //handler functions will use req and res to get random pokemon from the API
        const pokemonArray = []; //creates an empty array to store pokemon as we pull from API
        //Can add random number generator to get different pokemon later


        axios.get(`https://pokeapi.co/api/v2/pokemon/1`) //handler function
            .then(res => { //res stands for response
                pokemonArray.push(res.data);
                axios.get(`https://pokeapi.co/api/v2/pokemon/2`) //You must make a single request at a time because that is how the pokeAPI is structured
                    .then(res => {
                        pokemonArray.push(res.data);
                        axios.get(`https://pokeapi.co/api/v2/pokemon/3`)
                            .then(res => {
                                pokemonArray.push(res.data);
                                res.status(200).send(pokemonArray)              //Send to client side. The status gives a number response to tell us if it was received ok
                            })
                    })
            })
            .catch(err => res.status(500).send(err)); //responds that there is a problem on the server side.

    }
}

//Handler functions always go in controller files