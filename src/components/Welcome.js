import React, { Component } from 'react';

class Welcome extends Component {    
    render() {
        const {name, parentName} = this.props
        // const {state1, state2} = this.state
        return (
            <h1>Welcome {name} a.k.a {parentName}</h1>
        )
        
    }
}

export default Welcome;