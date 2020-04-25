import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            number : 0,
            name: 'your Name'
        }
    }

    handleKeyPress = e => {
        if(e.key ==='Enter'){
            this.setState({
                [e.target.name]: e.target.value 
            })
        }
    }

    render() {
        const {number, name} = this.state
        return (
            <div>
                <input value={number} readOnly/>
                <button onClick={()=>this.setState({number:number +1})}>+</button>
                <button onClick={()=>this.setState({number:number -1})}>-</button>
                <br/><input name="name" onKeyPress={this.handleKeyPress}/>
                <br/>{name}
            </div>
        );
    }
}

export default Counter;