import React from "react";
import "./Todo.css";
import List from "./List"
import {v4 as uuidv4} from "uuid";

class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            task: "",
            items: []
        }
    }

    componentWillMount(){
        this.setState({
            items: [
                {
                    id: uuidv4(),
                    task: "Sacar la basura",
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: "Labar los platos",
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: "Amar Gatitos",
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: "Hacerle mate a Mau",
                    completed: false
                },
            ]
        });
    }

    handleOnChange = (event) => {
        const {target: {value}} = event;
        this.setState({ task: value});
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        if(this.state.task.trim() !== ""){
            this.setState({
                task: "",
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        completed: false
                    }
                ]
            })
        }
    }

    markAsCompleted = (id) => {
        const foundTask = this.state.items.find(
            task => task.id === id
            );
        const newItems = this.state.items.map(item => item);
        newItems[id] = foundTask;
        foundTask.completed = true;
        this.setState({
            items: newItems
        });
        console.log(this.state.items);
    }

    removeTask = (id) => {
        const filteredTask = this.state.items.filter(task => task.id !== id);
        this.setState({
            items: filteredTask
        });
    }

    render(){
        return(
            <div className="Todo">
                <h1>New Task:</h1>
                <form onSubmit={this.handleOnSubmit} >
                    <input value={this.state.task} onChange={this.handleOnChange} />
                </form>    
                <List items={this.state.items}
                      markAsCompleted={this.markAsCompleted}
                      removeTask={this.removeTask} />
            </div>
        );
    }
}

export default Todo;