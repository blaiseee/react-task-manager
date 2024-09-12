import React from 'react'
import { Task } from '../model/types'

interface TaskListProps {
    tasks: Task[]
    onDeleteTask: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} className='border p-2 mb-2 flex justify-bottom'>
                    <div>
                        <h3 className='font-bold'>{task.title}</h3>
                        <p>{task.description}</p>
                        <p className='text-gray-500'>{task.dueDate}</p>
                    </div>
                    <button
                        onClick={() => onDeleteTask(task.id)}
                        className='bg-red-500 text-white px-2 py-1'
                    >
                        Delete Task
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList