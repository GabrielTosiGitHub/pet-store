import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { AuthContext } from '../contexts/AuthContext'
import { FaShoppingCart } from 'react-icons/fa'
import styled from 'styled-components'

const Brand = styled(Link)`font-weight:700; font-size:1.25rem; color:inherit; text-decoration:none;`;

export default function NavBar() {
  const { totalItems } = useContext(CartContext)
  const { user, logout, isAuthenticated } = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Brand to="/">Pet Store</Brand>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
          </ul>
          <div className="d-flex align-items-center">
            <Link to="/cart" className="btn btn-outline-primary me-3">
              <FaShoppingCart /> {totalItems > 0 && <span className="badge bg-primary ms-2">{totalItems}</span>}
            </Link>
            {isAuthenticated ? (
              <>
                <span className="me-2">{user.email}</span>
                <button className="btn btn-outline-secondary" onClick={logout}>Salir</button>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary">Ingresar</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
