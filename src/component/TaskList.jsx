import { useState } from "react";

export default function TaskList({ taskList, onDeleteTask }) {
    return (
        <ul>
            {taskList.map(task => (
                <List key={task.id} task={task} onDeleteTask={onDeleteTask} />
            ))}
        </ul>
    )
};


function List({ task, onDeleteTask }) {
    const [isMarked, setIsMarked] = useState(false);
    return (
        <li key={task.id} className={isMarked ? "marked" : ""}>
            <h4>{task.task}</h4>
            <p>{task.taskTime}</p>

            <div>
                <button onClick={() => setIsMarked(!isMarked)}>✅</button>
                <button style={{ marginLeft: "1rem" }} onClick={() => onDeleteTask(task.id)}>❌</button>
            </div>
        </li>
    );
};