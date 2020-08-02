import React from "react";

class Person extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "Ganesh",
            age : 22
        }
        this.increaseAge = this.increaseAge.bind(this)
        this.decreaseAge = this.decreaseAge.bind(this)
    }

    increaseAge(){
        this.setState((prevState)=>{
            return {
                age : prevState.age + 1
            }
        })
    }

    decreaseAge(){
        this.setState((prevState)=>{
            return {
                age : prevState.age - 1
            }
        })
    }


    render(){
        return (
            <div>
                <h1>{this.state.name} <br/></h1>
                <h3>{this.state.age} yrs old</h3>
                <input className="btn btn-primary" onClick={this.increaseAge} type="button" value="Increase Age"/>
                <input className="btn btn-secondary" onClick={this.decreaseAge} type="button" value="Decrease Age"/>
            </div>
        )};
}

export default Person