import React,{ Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this) // 3rd method: binding in class constructor (suggested by React Documentation)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    //     console.log(this)
    // }

    // 4th method: class properties as Arrow Functions ( suggested by React Documentation, but its a experimental feature (in 2018))
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */ /* 1st method: binding in handle approach (perform problems) */} 
                {/* <button onClick={() => this.clickHandler()}>Click</button> */ /* 2nd method: Arrow function in handler (also perfom problemas, but its the easiest approach)*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind