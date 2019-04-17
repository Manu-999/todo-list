import React from 'react';
import './Todos.scss';
import Task from '../Task/Task';
class Todos extends React.Component {

    state = {
        tasks: [],
        newTaskTitle: '',
        newTaskText: ''
    };

    addTask = (title, text) => {
        if (title || text) {
            let newTask = {
                id: Date.now(),
                title,
                text,
                completed: false,
                createdAt: new Date(),
            }
            this.setState({ tasks: [newTask, ...this.state.tasks], newTaskTitle: '', newTaskText: '' });
        }
    };

    handleTask = () => {
        this.addTask(this.state.newTaskTitle.trim(), this.state.newTaskText.trim());
    }


    render() {
        return (
            <div className="todos">
                <div className="addTask">
                    <input className="input-task" type="text" placeholder="add a new title task" onChange={ev => this.setState({ newTaskTitle: ev.target.value })} value={this.state.newTaskTitle}></input>

                    <textarea className="input-text" type="textarea" placeholder="add the body of the task" value={this.state.newTaskText} onChange={ev => this.setState({ newTaskText: ev.target.value })}></textarea>

                    <input type="submit" onClick={this.handleTask}></input>
                </div>
                <div className="taskList">
                    {this.state.tasks.map(tasks => (
                        <Task title={tasks.title} text={tasks.text} key={tasks.id} />
                    ))}
                </div>
            </div>
        )
    }
};

export default Todos;