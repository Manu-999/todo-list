import React from 'react';
import './Todos.scss';
import Task from '../Task/Task';
class Todos extends React.Component {

    state = {
        tasks: [],
        newTaskText: ''
    };

    addTask = (text) => {
        if (text) {
            let newTask = {
                id: Date.now(),
                text,
                completed: false,
                created: new Date()
            }
            this.setState({ tasks: [...this.state.tasks, newTask], newTaskText: '' });
            console.log(this.state.tasks);
        }
    };

    hendleTask = (ev) => {
        if (ev.keyCode === 13) {
            this.addTask(this.state.newTaskText.trim());
        }
    };

    render() {
        return (
            <div className="todos">
                <div className="addTask">
                    <input className="input-task" type="text" placeholder="añadir una tarea" onChange={ev => this.setState({ newTaskText: ev.target.value })} onKeyUp={this.handleTask} value={this.state.newTaskText}></input>
                </div>
                <div className="taskList">
                    {this.state.tasks.map(tasks => (
                        <Task text={tasks.text} key={tasks.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Todos;