import { useState } from 'react';
import FormAddTask from './component/FormAddTask';
import TaskList from './component/TaskList';


function App() {
  const [taskList, setTaskList] = useState([]);

  function handleAddTask(task) {
    setTaskList(tasks => [...tasks, task]);
  };

  function handleDeleteTask(id) {
    setTaskList(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <div className='container'>
      <h1>Today's Tasks</h1>

      <FormAddTask onAddTask={handleAddTask} />
      <TaskList taskList={taskList} onDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default App
