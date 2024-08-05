import {useState} from "react";
import Item from "./Item";
import _uniqueId from "lodash/uniqueId";

const TodoBox = () => {
    const [taskInput, setTaskInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTask = (event) => {
        event.preventDefault();
        if (taskInput !== "") {
            const task = {
                id: _uniqueId(),
                description: taskInput
            };
            setTodoList([task, ...todoList]);
            setTaskInput("");
        }
    };
    const handleChange = (event) => {
        setTaskInput(event.target.value);
    };
    const handleRemove = (task) => {
        setTodoList(todoList.filter((item) => item.id !== task.id));
    };
    return <div className="container mt-4">
        <div className="mb-3">
            <form className="d-flex">
                <div className="me-3">
                    <input type="text" onChange={handleChange} value={taskInput}
                           className="form-control"
                           placeholder="I am going..."/>
                </div>
                <button onClick={addTask} type="button" className="btn btn-primary">add</button>
            </form>
        </div>
        {todoList.map((task) => (<Item onRemove={handleRemove} key={task.id} task={task}/>))}
    </div>;

};

export default TodoBox;