import React from 'react';
import './App.css';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard'
import Signup from './components/auth/Signup';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
