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
                    <input id="checkbox" className="input checkbox" type="checkbox" checked={item.done} onChange={()=> this.handleCheck(item.id)} />
                    <label for="checkbox">{item.task}</label>
                </div>
            );
        })
        
        return (
            <div id="ToDoComponent">
                {ToDoItems}
            </div>
        );
    }
}