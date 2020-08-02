import React from "react";


class LoginCard extends React.Component{
    constructor(){
        super()
        this.state = {isLoggedIn : false}
    }

    render(){
        let status
        if(this.state.isLoggedIn){
            status = "Yes"
        }else{
            status = "No"
        }
        return (
            <div>Is Currently Logged in {status} </div>
        );
    }
}

export default LoginCard