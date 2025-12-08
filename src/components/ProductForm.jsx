import React, { useState, useContext, useEffect } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import { toast } from 'react-toastify'

export default function ProductForm({ product, onSaved }) {
  const isEdit = Boolean(product)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const { createProduct, updateProduct } = useContext(ProductsContext)

  useEffect(() => {
    if (product) {
      setName(product.name || '')
      setPrice(product.price || '')
      setDescription(product.description || '')
      setCategory(product.category || '')
      setImage(product.image || '')
    }
  }, [product])

  const validate = () => {
    if (!name.trim()) return 'Nombre obligatorio'
    if (!price || Number(price) <= 0) return 'Precio debe ser mayor a 0'
    if ((description || '').trim().length < 10) return 'Descripción mínima 10 caracteres'
    return null
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const err = validate()
    if (err) return toast.error(err)
    try {
      const payload = { name, price: Number(price), description, category, image }
      if (isEdit) await updateProduct(product.id, payload)
      else await createProduct(payload)
      toast.success('Producto guardado')
      setName(''); setPrice(''); setDescription(''); setCategory(''); setImage('')
      if (onSaved) onSaved()
    } catch (e) {
      toast.error('Error guardando producto')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <h5>{isEdit ? 'Editar producto' : 'Agregar producto'}</h5>
      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input className="form-control" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-2">
        <label className="form-label">Precio</label>
        <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
      </div>
      <div className="mb-2">
        <label className="form-label">Descripción</label>
        <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="mb-2">
        <label className="form-label">Categoría</label>
        <input className="form-control" value={category} onChange={e => setCategory(e.target.value)} />
      </div>
      <div className="mb-2">
        <label className="form-label">URL imagen</label>
        <input className="form-control" value={image} onChange={e => setImage(e.target.value)} placeholder="/images/collar.jpg o https://..." />
      </div>
      <button className="btn btn-success" type="submit">Guardar</button>
    </form>
  )
}
