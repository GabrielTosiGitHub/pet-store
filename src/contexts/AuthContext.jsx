import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()
const AUTH_KEY = 'petstore_auth'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(AUTH_KEY)
      return raw ? JSON.parse(raw) : null
    } catch (e) {
      return null
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user))
    else localStorage.removeItem(AUTH_KEY)
  }, [user])

  const login = async ({ email, password }) => {
    if (!email || !password) throw new Error('Credenciales inválidas')
    const fake = { id: 'u1', email }
    setUser(fake)
    return fake
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
