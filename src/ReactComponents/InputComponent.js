import React from "react";

class InputComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName : ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return (
            <div>
                <div>Input Component</div>
                <input onChange={this.handleChange} type="text" name="firstName"/>
                <input onChange={this.handleChange} type="text" name="lastName"/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </div>
        );
    }
}

export default InputComponent