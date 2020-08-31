import React, {Component} from 'react';


class Grass extends Component { //displays wildPokemon from Finder.js
    handleCatch = () => {
        const {pokemon} = this.props;
        let newPokemon = {
            name: pokemon.name,
            img: pokemon.sprites.front_default //sprites is in the API, its where the images are stored
        }

        this.props.catchFn(newPokemon);
        this.props.refreshFn();
    }

    render(){
        return (
            <div onClick={this.handleCatch}> {/* Runs handleCatch above once the user clicks the button */}
                <img src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name}/>
                <p>{this.props.pokemon.name}</p>
            </div>
        )
    }
}

export default Grass;