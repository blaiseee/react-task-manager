import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = (): void => {
        login(username)
        navigate('/dashboard')
    }

    return (
        <div className='max-w-md mx-auto p-4'>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='border p-2 mb-4 w-full'
            />
            <button 
                onClick={handleLogin}
                className='bg-blue-500 text-white px-4 py-2'
            >
                Login
            </button>
        </div>
    )
}

export default Login