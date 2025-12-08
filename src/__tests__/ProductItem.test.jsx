import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductItem from '../components/ProductItem'
import { CartContext } from '../contexts/CartContext'

test('renders product item with name and price', () => {
  const product = { id: '1', name: 'Collar', price: 9.99, image: '/images/test.png' }
  const addToCart = jest.fn()
  render(
    <CartContext.Provider value={{ addToCart }}>
      <ProductItem product={product} />
    </CartContext.Provider>
  )
  expect(screen.getByText(/Collar/i)).toBeInTheDocument()
  expect(screen.getByText(/9.99/)).toBeInTheDocument()
})
