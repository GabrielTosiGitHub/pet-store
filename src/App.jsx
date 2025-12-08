import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import ProductsAdmin from './pages/ProductsAdmin'
import Login from './pages/Login'
import CartPage from './pages/CartPage'
import ProtectedRoute from './components/ProtectedRoute'
import NavBar from './components/NavBar'
import { Helmet } from 'react-helmet'
import EditProduct from './pages/EditProduct';


export default function App() {
  return (
    <>
      <Helmet>
        <title>Pet Store - Tienda de Mascotas</title>
        <meta name="description" content="Tienda online de productos para mascotas" />
      </Helmet>
      <NavBar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><ProductsAdmin /></ProtectedRoute>} />
          <Route path="/editar/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
        </Routes>
      </main>
      <ToastContainer position="top-right" />
    </>
  )
}
