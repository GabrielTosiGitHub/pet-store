import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-3">
      <input aria-label="Buscar productos" className="form-control" placeholder="Buscar por nombre o categoría..." value={value} onChange={e => onChange(e.target.value)} />
    </div>
  )
}
