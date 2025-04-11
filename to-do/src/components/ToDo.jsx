import {useState} from "react";
import Task from "./Task.jsx";

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');

    function addTask(e) {
        e.preventDefault();
        let newTask = {task: task, date: date};

        if (tasks.find((task) => task.date === newTask.date) && tasks.find(task => task.task === newTask.task)) {
            alert("Task already exists");
            return;
        }
        setTasks(prev => [...prev, newTask]);
    }

    function removeTask(deletedTask) {
        setTasks(prev => prev.filter(task => task !== deletedTask));
    }

    return (
        <div className="flex flex-col w-screen gap-7 items-center  py-6">
            <h1 className="text-4xl text-white font-bold">To Do Application</h1>
            <form onSubmit={addTask} className="space-x-9">
                <input className="border rounded-sm px-2 py-1 min-w-70"
                    placeholder="Enter task" value={task} onChange={e => setTask(e.target.value)} required />
                <input className="border rounded-sm px-2 py-1"
                    type="date" value={date} onChange={e => setDate(e.target.value)} required/>
                <button className="cursor-pointer bg-green-800 rounded-lg min-w-26 py-1"
                    type="submit">Add</button>
            </form>
            <div className="space-y-6">
                {tasks.map((task, idx) => <Task key={idx} task={task.task} date={task.date} deleteTask={()=> removeTask(task)}/>)}
            </div>
        </div>
    );
}

export default ToDo;