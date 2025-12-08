import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { toast } from 'react-toastify'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login({ email, password })
      toast.success('Ingreso correcto')
      navigate(from, { replace: true })
    } catch (err) {
      toast.error(err.message || 'Error al iniciar sesión')
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Ingresar</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary" type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  )
}
