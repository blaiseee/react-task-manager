import React, { createContext, ReactNode, useContext, useState } from 'react'
import { User } from '../model/types'

interface AuthContextType {
    user: User | null
    login: (username: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (username: string): void => {
        setUser({ id: Date.now(), username })
    }

    const logout = (): void => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}