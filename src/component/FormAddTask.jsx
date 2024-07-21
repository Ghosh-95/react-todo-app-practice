import { useState } from "react";

export default function FormAddTask({ onAddTask }) {
    const [time, setTime] = useState('');
    const [task, setTask] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!time || !task) return;

        const taskTime = time.substring(0, 2) < 12 ? `${time} AM` : time.substring(0, 2) === '00' ? `${time} PM` : `${time} PM`;

        const taskObj = { id: Date.now(), task, taskTime };

        onAddTask(taskObj);

        setTask('');
        setTime('');
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="task-input"></label>
            <input type="text" onChange={e => setTask(e.target.value)} id="task-input" placeholder="your task" />

            <label htmlFor="task-time"></label>
            <input type="time" value={time} id="task-time" onChange={e => setTime(e.target.value)} />

            <button>Add</button>
        </form>
    )
}