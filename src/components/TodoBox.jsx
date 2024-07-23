import React from 'react';
import Item from './Item';
import _uniqueId from 'lodash/uniqueId';

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInput: '',
            todoList: []
        };
    }

    addTask = (event) => {
        event.preventDefault();
        const {todoList, taskInput} = this.state;
        const task = {
            id: _uniqueId(),
            description: taskInput
        };
        this.setState({todoList: [task, ...todoList], taskInput: ''});
    };

    handleChange = (event) => {
        this.setState({taskInput: event.target.value});
    };

    handleRemove = (task) => {
        this.setState(({todoList}) => ({todoList: todoList.filter((item) => item.id !== task.id)}));
    };

    render() {
        return <div className="container mt-4">
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input type="text" onChange={this.handleChange} value={this.state.taskInput}
                               className="form-control"
                               placeholder="I am going..."/>
                    </div>
                    <button onClick={this.addTask} type="button" className="btn btn-primary">add</button>
                </form>
            </div>
            {this.state.todoList.map((task) => (<Item onRemove={this.handleRemove} key={task.id} task={task}/>))}
        </div>;
    }
}

export default TodoBox;