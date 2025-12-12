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
    // VALIDACIÓN REAL (simulada)
    if (email !== "admin" || password !== "admin123") {
      throw new Error("Usuario o contraseña incorrectos")
    }

    const adminUser = { id: "u1", email: "admin", role: "admin" }
    setUser(adminUser)
    return adminUser
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
