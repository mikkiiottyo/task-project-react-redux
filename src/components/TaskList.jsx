import React from 'react'
import { useSelector } from 'react-redux'

export default function TaskList() {
    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)

    if(loading) {
       return <p>Tasks Loading...</p>
    }
    if(error) {
       return <p>There is an problem{error}</p>
    }
  return (
    <div>
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
    </div>
  )
}