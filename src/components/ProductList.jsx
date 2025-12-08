import React, { useContext, useState, useMemo } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import ProductItem from './ProductItem'
import SearchBar from './SearchBar'
import Pagination from './Pagination'

export default function ProductList() {
  const { products, loading, error } = useContext(ProductsContext)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 8

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter(p => (p.name || '').toLowerCase().includes(q) || (p.category || '').toLowerCase().includes(q))
  }, [products, query])

  const total = filtered.length
  const pages = Math.ceil(total / perPage)
  const visible = filtered.slice((page - 1) * perPage, page * perPage)

  if (loading) return <p>Cargando productos...</p>
  if (error) return <p className="text-danger">{error}</p>

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />
      <div className="row">
        {visible.map(p => (
          <div className="col-md-3 mb-3" key={p.productoId}>
            <ProductItem product={p} />
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} pages={pages} />
    </div>
  )
}
