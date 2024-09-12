import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Task } from '../model/types';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth()
    const [tasks, setTasks] = useState<Task[]>([])

    const handleAddTask = (task: Task): void => {
        setTasks([...tasks, task])
    }

    const handleRemoveTask = (id: number): void => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    if (!user) return <div>Please log in</div>

    return (
        <div className='max-w-md mx-auto p-4'>
            <h2 className='text-2xl font-bold mb-4'>Dashboard</h2>
            <button
                onClick={logout}
                className='bg-red-500 text-white px-4 py-2 mb-4'
            >
                Logout
            </button>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onDeleteTask={handleRemoveTask} />
        </div>
    )
}

export default Dashboard