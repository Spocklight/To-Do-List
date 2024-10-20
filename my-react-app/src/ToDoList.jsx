import React, { useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){s

    }

    function moveTaskDown(index){

    }
    return (<div classname='to-do-list'>

        <h1>To-Do-List</h1>

        <div>
            <input
            type='text'
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange }/>
        </div>


        </div>);
}

export default ToDoList