import React from 'react'
import { useNavigate } from "react-router-dom"


const Signup: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='max-w-md mx-auto p-4'>
            <h2 className='text-2xl font-bold mb-4'>Signup</h2>
            <p>Signup functionality is not implemented. Please log in.</p>
            <button
                onClick={e => navigate('/login')}
                className='bg-blue-500 text-white px-4 py-2'
            >
                Go to login
            </button>
        </div>
    )
}

export default Signup