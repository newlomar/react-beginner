import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        /* 4st method: Short circuit operator */
        return this.state.isLoggedIn && <div>Welcome Newton</div>

        /*1st method: using if else statement */
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Newton
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }


        /*2nd method: using element variables */
        // let message
        
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Newton</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        /* 3rd method: using ternary operator */
        // return (
        //     this.state.isLoggedIn ?
        //     <div>Welcome Newton</div> :
        //     <div>Welcome Guest</div>
        // )

        /*Base approach */
        // return (
        //     <div>
        //         <div>Welcome Newton</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // ) 
    }
}

export default UserGreeting