import React, { Component } from 'react';

class TravelForm extends Component {

    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            age : 0,
            gender : "",
            destination : "",
            dietaryRestrictions : []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }
    
    render() { 
        return ( 
            <div>
                <div>Airlines Travel Form</div>
                <input 
                    name="firstName" 
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="First Name"
                />
                <br/>
                <input 
                    name="lastName" 
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                />
                <br/>
                <input 
                    name="age" 
                    type="number"
                    onChange={this.handleChange}
                    value = {this.state.age}
                    placeholder = "Age"
                />
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        onChange = {this.handleChange}
                        checked = {this.state.gender === "male"}
                    />
                    Male
                </label>
                    
                <label>
                    <input 
                        type = "radio" 
                        name = "gender" 
                        value = "female"
                        onChange = {this.handleChange}
                        checked = {this.state.gender === "female"}
                    />
                    Female
                </label>
                <br />

                <select name="destination" onChange={this.handleChange}>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Goa</option>
                    <option>Chennai</option>
                </select>
                <br />

                <label>
                    <input type="checkbox" name="lactose"/>
                    Lactose
                </label>

                <label>
                    <input type="checkbox" name="peanut"/>
                    Peanut
                </label>

                <label>
                    <input type="checkbox"  name="mushrooms"/>
                    Mushrooms
                </label>

                <div>
                    <h3>Result Box</h3>
                    <div>Your Name is {this.state.firstName} {this.state.lastName}</div>
                    <div>Your age is {this.state.age}</div>
                    <div>Your gender is {this.state.gender}</div>
                    <div>Your Destination is {this.state.destination}</div>
                    <div>Your Dietary restrictions are {this.state.dietaryRestrictions}</div>
                </div>
            </div>
         );
    }
}
 
export default TravelForm;