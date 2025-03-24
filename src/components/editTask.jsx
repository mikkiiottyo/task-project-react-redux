import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const EditTask = ({task,className}) => {
const [isEdit, setIsEditing] = useState(false) 
const [title, setTitle] = useState (task.title)
const [description, setDescription] = useState(task.description)
const [status, setStatus] = useState(task.status)
const dispatch = useDispatch()
  return (
    <div>
        {isEdit ? (
            <div><div>
            <input
            type="text"
            placeholder="Task Name"
            value={title}
            onChange={ (e) => setTitle(e.target.value)}
            className="form-container"
            required
            />
        </div>
        <div>
            <textarea
            placeholder="Task Description"
            value={description}
            onChange={ (e) => setDescription(e.target.value)}
            className="textarea"
            rows="3"
            ></textarea>
        </div>
        <div>
            <select
            value={status}
            onChange={ (e) => setStatus(e.target.value)}
            >
                <option value="To Do">To Do</option> 
                <option value="In Progress">In progress</option> 
                <option value="Completed">Completed</option> 
            </select>
        </div>
        <button
        type="submit"
        className="cancel"
        >Cancel
        </button>
        <button
        type="submit"
        className="press"
        >Add Task
        </button>
        </div>
        ) : (
        <button 
        className={className} 
        onClick={() => setIsEditing(true)}>Edit
        </button>
        )}
    </div>
    
   
  )

}
export default EditTask