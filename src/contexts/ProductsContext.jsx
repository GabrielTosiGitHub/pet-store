import React, { createContext, useState, useEffect } from 'react'
import { API } from '../api'

export const ProductsContext = createContext()

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await API.get('/')
      setProducts(res.data)
    } catch (err) {
      setError(err.message || 'Error al obtener productos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const createProduct = async data => {
    const res = await API.post('/', data)
    setProducts(prev => [res.data, ...prev])
    return res.data
  }

  const updateProduct = async (id, data) => {
    const res = await API.put(`/${id}`, data)
    setProducts(prev => prev.map(p => p.id === id ? res.data : p))
    return res.data
  }

  const deleteProduct = async id => {
    await API.delete(`/${id}`)
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  return (
    <ProductsContext.Provider value={{ products, loading, error, fetchProducts, createProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
