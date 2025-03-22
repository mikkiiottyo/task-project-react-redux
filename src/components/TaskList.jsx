import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo } from '../features/tasksSlice'

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
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div>
                            <p>{task.title}</p>
                            {task.description && <p>{task.description}</p>}
                            <p>Status: {task.status}</p>
                        </div>
                        <div>
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}