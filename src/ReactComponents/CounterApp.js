import React from "react"

class CounterApp extends React.Component{
    constructor(){
        super()
        this.state = {
            numberCount : 0 
        }
        this.increaseCount = this.increaseCount.bind(this)
    }

    increaseCount(){
        this.setState((prevState)=>{
            return {
                numberCount : prevState.numberCount + 1
            }
        })
    }

    

    render(){
        let centerStyle = 
        {
            margin : "auto",
            display : "block"
        }
        return (
            <div id="CounterApp" width="100%">
                <p className="h1 text-center p-4">{this.state.numberCount}</p>

                <input type="button" style={centerStyle} onClick={this.increaseCount} className="btn btn-primary" value="Increase Count"/>
            </div>
        );
    }
}

export default CounterApp