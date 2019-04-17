import React from 'react';
import './Task.scss';

class Task extends React.Component {
    render() {
        return (
            <div className="tasks">
                <span className="text">{this.props.text}</span>
            </div>
        )
    }
}

export default Task;