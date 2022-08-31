
import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        return(
            <div>

                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p><b>Age</b>: { this.props.age }</p>
                <p><b>Hair Color</b>: { this.props.hairColor }</p>
    
            </div>
        )
    }
}

export default PersonCard;