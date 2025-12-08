import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { toast } from 'react-toastify'

export default function CartPage() {
  const { items, removeFromCart, updateQty, clearCart, totalPrice } = useContext(CartContext)

  if (items.length === 0) return <p>No hay productos en el carrito.</p>

  return (
    <div>
      <h2>Carrito</h2>
      <ul className="list-group mb-3">
        {items.map(i => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={i.productoId}   
          >
            <div>
              <strong>{i.name}</strong>
              <div className="small">€{i.price} x</div>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="number"
                min={1}
                value={i.qty}
                onChange={e =>
                  updateQty(i.productoId, Number(e.target.value)) 
                }
                style={{ width: 80 }}
                className="form-control me-2"
              />
              <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                  removeFromCart(i.productoId) 
                  toast.info('Producto eliminado')
                }}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: €{totalPrice.toFixed(2)}</h4>
        <div>
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => {
              clearCart()
              toast.info('Carrito vaciado')
            }}
          >
            Vaciar
          </button>
          <button
            className="btn btn-success"
            onClick={() => toast.success('Simulación de compra exitosa')}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  )
}
