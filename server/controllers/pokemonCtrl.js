const caughtPokemon = []; //create a new variable that stores user input data into an empty array 
let id = 0;   //allows me to assign each pokemon a unique id to keep track of each one.

module.exports = {  //The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
    getCaughtPokemon: (req, res) => { //this is a get request and a handler function. Its entire job is to send caughtPokemon array to client side so it will display the user data 
        //res.status(200).send(caughtPokemon); //Sends method to client side
    }, // res.status is api respone interface and shows success response
    
    catchPokemon: (req, res) => { //Post request
        const {pokemon} = req.body; // we need the body is for adding or updating info on api. 
        pokemon.id = id; //allows to reassign pokemon name
        id++; // allows multiple pokemon to be reassigned name
        caughtPokemon.push(pokemon); // adds pokemon into the pokedex
        res.status(200).send(caughtPokemon);  // client side can now see pokemon in the pokedex as caught
    },
    
    editName: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;
        console.log(name)
        console.log(req.body)
                                                // findIndex looks for an id parameter then uses bracket notation to reassign the name value
        const index = caughtPokemon.findIndex(e => e.id === + id); // must use + id to save the nickname
        caughtPokemon[index].name = name;
        res.status(200).send(caughtPokemon);  //send caughtPokemon status to client side
    },
    
    releasePokemon: (req, res) => {
        const {id} = req.params;

        const index = caughtPokemon.findIndex(e => e.id === +id); //allows pokemon to be deleted. 
        caughtPokemon.splice(index, 1); //allows to remove an item
        res.status(200).send(caughtPokemon); //pushes new array to client side
    }
}