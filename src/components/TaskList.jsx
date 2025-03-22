import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo } from '../features/tasksSlice'
import './TaskList.css'

export default function TaskList() {
    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchTodo())
    }, [dispatch])

    if (loading) {
       return <p>Tasks Loading...</p>
    }
    if (error) {
       return <p>There is a problem: {error}</p>
    }

    return (
        <div className="task-container">
            <h2>Tasks</h2>
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        <div className="task-details">
                            <p>{task.title}</p>
                            {task.description && <p>{task.description}</p>}
                            <p>Status: {task.status}</p>
                        </div>
                        <div className="task-buttons">
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}