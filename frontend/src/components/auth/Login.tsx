import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext'
// import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  // const { login } = useContext(AuthContext);
  // const [username, setUsername] = useState('')
  // const { login } = useAuth()
  // const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // login(formData);
  }

  // const handleLogin = (): void => {
  //   login(username)
  //   navigate('/dashboard')
  // }

  return (
    <div className='max-w-md mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={onChange}
          required 
          className='border p-2 mb-4 w-full'
        />
        <input 
          type='password'
          name='password'
          value={formData.password}
          onChange={onChange}
          required
          className='border p-2 mb-4 w-full'
        />
        <button 
          type='submit'
          className='bg-blue-500 text-white px-4 py-2'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login