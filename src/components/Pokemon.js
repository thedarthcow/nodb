import React, {Component} from 'react';

class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            nameInput: ''
        }
    }
    handleInput = (val) => {
        this.setState({nameInput: val}) //updates nameInput on state as user types into input
    }


    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }


    handleEdit = (id) => {
        this.props.nameFn(id, this.state.nameInput); //uses editName function passed from props
        this.handleToggle();
    }

    render(){
        return (
            <div>
                <img src={this.props.pokemon.img} alt={this.props.pokemon.name}/>
                {this.state.isEditing
                ? (
                    <div>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.pokemon.id)}>Nickname</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.pokemon.name}</p>
                        <button onClick={this.handleToggle}>Give A Nickname</button>
                    </div>
                )}
                <button onClick={() => this.props.releaseFn(this.props.pokemon.id)}>Release Back Into Wild</button>
            </div>
        )
    }
}

export default Pokemon;