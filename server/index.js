const express = require ('express'); //import statement, bringing the express package into application
const app = express(); //creates a variable called "app" and set it equal to express invoked. Whenever we use app." <anything> ", it is a method coming from the express framework. This gives the tool of the framework to build servers.
const grassCtrl = require('./controller/grassCtrl'); //Endpoint for working with data wildPokemon. This is done by requiring the controller

app.use(express.json()); //Parcer. This is top level middleware. Whenever the server recieves the request from a client side, it will run this function first. This is necissary when using json because we need to parse it back to javascript. This is a translation essentially. 

app.get('/api/wild-pokemon', grassCtrl.getWildPokemon); //endpoint for grassCtrl. This allows the client side to work with the server side. 

app.listen(4000, () => console.log('The server is running on port 4000')); //Allows me to define where the server is listening for requests. What port number is it listening to requests on? You should use anything between 3001-8000 because those are the least commonly used ports that wont be taken up by your computer. Adding a console.log gives a visual that the server is running. 

