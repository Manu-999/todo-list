import React from 'react';
import './Task.scss';

class Task extends React.Component {
    render() {
        return (
            <div className="tasks">
                <h2 className="title">{this.props.title}</h2>
                <p className="text">{this.props.text}</p>

            </div>
        )
    }
}

export default Task;