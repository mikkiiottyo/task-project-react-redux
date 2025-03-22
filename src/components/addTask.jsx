import React from 'react'
import './addTask.css'

const AddTask = () => {
    return (
        <form>
            <div>
                <input
                type="text"
                placeholder="Task Name"
                className="form-container"
                required
                />
            </div>
            <div>
                <textarea
                placeholder="Task Description"
                className="textarea"
                rows="3"
                ></textarea>
            </div>
            <div>
                <select>
                    <option value="To Do">To Do</option> 
                    <option value="In Progress">In progress</option> 
                    <option value="Completed">Completed</option> 
                </select>
            </div>
            <button
            type="submit"
            className="press"
            >Add Task
            </button>
        </form>
    )
}
export default AddTask