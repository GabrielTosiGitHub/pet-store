import React, { useContext, useState } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import ProductForm from '../components/ProductForm'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ProductsAdmin() {
  const { products, deleteProduct } = useContext(ProductsContext)
  const [editing, setEditing] = useState(null)

  const handleDelete = async productoId => {
    if (!confirm('¿Seguro que quieres borrar este producto?')) return
    try {
      await deleteProduct(productoId)
      toast.success('Producto eliminado')
    } catch (err) {
      toast.error('Error eliminando producto')
    }
  }

  return (
    <div>
      <h2>Administración de productos</h2>

      <div className="mb-4">
        
        <ProductForm product={editing} onSaved={() => setEditing(null)} />
      </div>

      <div className="row">
        {products.map(p => (
          <div key={p.productoId} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={p.image || `/images/${p.imageName || 'placeholder.png'}`}
                alt={p.name}
                style={{ height: 160, objectFit: 'cover' }}
              />

              <div className="card-body">
                <h5>{p.name}</h5>
                <p className="small">€{p.price}</p>

                <div className="d-flex">
                  
                  <Link 
                    to={`/editar/${p.productoId}`} 
                    className="btn btn-warning btn-sm me-2"
                  >
                    Editar
                  </Link>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(p.productoId)}
                  >
                    Eliminar
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
