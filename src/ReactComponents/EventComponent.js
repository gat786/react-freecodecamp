import React from "react"

class EventComponent extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div id="EventComponent">
                <img src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1596371862/bebe.jpg" height="200"
                    alt="bebes in a sexy avatar"
                    onMouseOver={
                        ()=>{
                            console.log("Mouse was hovered")
                        }
                    }>
                </img> <br/>
                <input type="button" className="btn btn-primary" onClick={()=>{
                    console.log("Clicked")
                }} value="Click me"/>
            </div>
        );
    }
}

export default EventComponent