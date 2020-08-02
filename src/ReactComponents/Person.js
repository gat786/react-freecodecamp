import React from "react";

class Person extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "Ganesh",
            age : 22
        }
    }

    increaseAge(){
    }

    decreaseAge(){
    }


    render(){
        return (
            <div>
                <h1>{this.state.name} <br/></h1>
                <h3>{this.state.age} yrs old</h3>
                <input className="btn btn-primary" type="button" value="Increase Age"/>
                <input className="btn btn-secondary" type="button" value="Decrease Age"/>
            </div>
        )};
}

export default Person