import React, {Component} from 'react';
import axios from 'axios'; //importing axios allows us to make axios requests to our server
import Grass from './Grass';

class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            wildPokemon: []
        }
    }

    componentDidMount(){ //this will fire after the first time render is fired
        this.getWildPokemon();
    }

    getWildPokemon = () => {
        axios.get('/api/wild-pokemon')
        .then(res => {
            this.setState({wildPokemon: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedPokemon = this.state.wildPokemon.map((pokemon, i) => (
            <Grass 
                key={i}
                pokemon={pokemon}
                catchFn={this.props.catchFn}
                refreshFn={this.getWildPokemon}/>
        ))
        return (
            <div className='poke-flex'>
                {mappedPokemon}
            </div>
        )
    }
}

export default Finder;