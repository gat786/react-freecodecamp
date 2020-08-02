import React from "react"
import todoList from "../Repository/todoList"


export default class ToDoComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            todoitems : todoList.tasks
        }
    }

    render(){
        let ToDoItems = this.state.todoitems.map(item=>{
            return (
                <div key={item.id}>
                    <input type="checkbox" checked={item.done} onChange={(value)=>{
                        item.done = value
                    }} />
                    <label>{item.task}</label>
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