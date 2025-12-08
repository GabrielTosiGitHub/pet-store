import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { toast } from 'react-toastify'
import { FaCartPlus } from 'react-icons/fa'
import styled from 'styled-components'

const Card = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  border-radius:8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  overflow:hidden;
`;

const Img = styled.img`
  object-fit:cover;
  height:240px;
  width:100%;
  background: #f5f5f5;
`;

export default function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext)
  const handleAdd = () => {
    addToCart(product, 1)
    toast.success('Producto agregado al carrito')
  }

  return (
    <Card className="card">
      <Img src={product.image || `/images/${product.imageName || 'placeholder.png'}`} alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted small">{product.category}</p>
        <p className="card-text">{(product.description || '').slice(0,80)}...</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong>€{product.price}</strong>
          <button className="btn btn-sm btn-primary" onClick={handleAdd}><FaCartPlus /> Añadir</button>
        </div>
      </div>
    </Card>
  )
}
