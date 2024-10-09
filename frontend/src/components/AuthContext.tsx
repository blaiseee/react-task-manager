import React, { createContext, ReactNode, useContext, useReducer, useState } from 'react'
import { User } from '../model/types'
import axios from 'axios';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: object | null;
}

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextProps extends AuthState {
  login: (formData: { email: string; password: string }) => void;
  register: (formData: { name: string; email: string; password: string }) => void;
  logout: () => void;
  // user: User | null
  // login: (username: string) => void
  // logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const authReducer = (state: AuthState, action: any): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return { ...state, isAuthenticated: true, token: action.payload.token, user: action.payload.user };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, isAuthenticated: false, token: null, user: null, };
    default:
      return state;
  }

}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const initialState: AuthState = { isAuthenticated: false, token: null, user: null };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (formData: { email: string; password: string }): Promise<void> => {
    try {
      const res = await axios.post('/api/auth/login', formData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      console.error(err);
    }
  }

  const register = async (formData: { email: string, password: string }): Promise<void> => {
    try {
      const res = await axios.post('/api/auth/register', formData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    } catch (err) {
      console.error(err);
    }
  }

  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// export const useAuth = () => {
//     const context = useContext(AuthContext)
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider')
//     }
//     return context
// }

export { AuthContext, AuthProvider };