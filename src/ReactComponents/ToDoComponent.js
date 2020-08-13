import React from "react"
import todoList from "../Repository/todoList"


export default class ToDoComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            todoitems : todoList.tasks
        }
        this.handleCheck = this.handleCheck.bind(this)
    }
    
    handleCheck(id){
        todoList.tasks.forEach(element => {
            if(element.id === id){
                console.log(`${element.id}`)
                element.done = !element.done
            }
        });
        this.setState({
            todoitems : todoList.tasks
        })
    }

    render(){
        let ToDoItems = this.state.todoitems.map(item=>{
            return (
                <div key={item.id}>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" 
                            id={item.id}
                            checked={item.done} 
                            onChange={
                                ()=> { 
                                    this.handleCheck(item.id) 
                                }
                            } 
                            className="custom-control-input" 
                            id="defaultUnchecked" />
                        <label className="custom-control-label"
                         htmlFor={item.id}> {item.task} </label>
                    </div>
                </div>
            );
        })
        
        return (
            <div id="ToDoComponent">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h4>ToDo App</h4>
                        </div>
                        <div className="card-text">
                            {ToDoItems}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}