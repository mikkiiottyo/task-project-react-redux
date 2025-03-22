import React, {useState} from 'react'
import './addTask.css'
import { useDispatch } from 'react-redux'
import {v4 as uuid4} from 'uuid'

const AddTask = () => {
const [title, setTitle] = useState ('')
const [description, setDescription] = useState('')
const [status, setStatus] = useState('To Do')
const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
        id: uuid4(),
        title,
        description,
        status
    }
    dispatch()
}

    return (
        <form onSubmit={handleSubmit}>
            <div>
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
            className="press"
            >Add Task
            </button>
        </form>
    )
}
export default AddTask