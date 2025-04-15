import {useReducer, useRef} from "react";

function tasksReducer(state, action) {
    console.log(action);
    let newState = state;
    if (action.type === "ADD_TASK") {
        newState = [...state, action.payload];
    } else if (action.type === "REMOVE_TASK") {
        newState = state.filter(task => task !== action.payload);
    }

    return newState;
}

function Sample() {
    const [tasks, dispatchTasks] = useReducer(tasksReducer, []);
    const inputRef = useRef(null);

    function addTask(e) {
        if (e.key === "Enter") {
            dispatchTasks({type: "ADD_TASK", payload: e.target.value});
        }
    }

    function deleteTask(delTask) {
        dispatchTasks({type: "REMOVE_TASK", payload: delTask});
    }

    return (
        <center>
            <input ref={inputRef} placeholder="Enter Something" onKeyDown={addTask}/>
            {tasks.map((task, i) => <h1 key={i} onClick={() => deleteTask(task)}>{task}</h1>)}
        </center>
    );
}

export default Sample;