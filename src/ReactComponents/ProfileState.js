import React from "react";

class ProfileState extends React.Component{
    constructor(props){
        super()
        this.state = {
            isLoading : true
        }
    }

    render(){
        return (
            <div>
                <h3>This is the Profile Component</h3>
                <p>The current state is {this.state.isLoading ? "logged out" : "logged in"}</p>
                <input type="button" onClick={()=>{
                    this.setState((prevState)=>{
                        return {
                            isLoading : !prevState.isLoading
                        }
                    })
                }} value={`Log ${this.state.isLoading ? "in" : "out"}`} 
                className={`${this.state.isLoading ? "btn btn-primary" : "btn btn-secondary"}`}></input>
            </div>
        );
    }
}

export default ProfileState