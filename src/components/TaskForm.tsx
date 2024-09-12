import React, { useState } from 'react'
import { Task } from "../model/types"

interface TaskFormProps {
    onAddTask: (task: Task) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [dueDate, setDueDate] = useState<string>('')

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            dueDate
        }
        onAddTask(newTask)
        setTitle('')
        setDescription('')
        setDueDate('')
    }

    return (
        <form onSubmit={handleSubmit} className='mb-4'>
            <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={e => setTitle(e.target.value)}
                className='border p-2 mb-2 w-full'
            />
            <input 
                type='text'
                placeholder='Description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='border p-2 mb-2 w-full'
            />
            <input 
                type='text'
                placeholder='Due Date'
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}
                className='border p-2 mb-2 w-full'
            />
            <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2'
            >
                Add Task
            </button>
        </form>
    )
}

export default TaskForm