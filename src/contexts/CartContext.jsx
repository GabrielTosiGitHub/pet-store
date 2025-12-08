import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()
const CART_KEY = 'petstore_cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(CART_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const found = prev.find(i => i.productoId === product.productoId)
      if (found) {
        return prev.map(i =>
          i.productoId === product.productoId
            ? { ...i, qty: i.qty + qty }
            : i
        )
      }
      return [...prev, { ...product, qty }]
    })
  }

  const removeFromCart = (productoId) =>
    setItems(prev => prev.filter(i => i.productoId !== productoId))

  const updateQty = (productoId, qty) =>
    setItems(prev =>
      prev.map(i =>
        i.productoId === productoId
          ? { ...i, qty }
          : i
      )
    )

  const clearCart = () => setItems([])

  const totalItems = items.reduce((s, i) => s + i.qty, 0)
  const totalPrice = items.reduce((s, i) => s + i.qty * Number(i.price || 0), 0)

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}
