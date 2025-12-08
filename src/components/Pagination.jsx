import React from 'react'

export default function Pagination({ page, setPage, pages }) {
  if (pages <= 1) return null
  const numbers = Array.from({ length: pages }, (_, i) => i + 1)
  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}><button className="page-link" onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</button></li>
        {numbers.map(n => (
          <li key={n} className={`page-item ${n === page ? 'active' : ''}`}><button className="page-link" onClick={() => setPage(n)}>{n}</button></li>
        ))}
        <li className={`page-item ${page === pages ? 'disabled' : ''}`}><button className="page-link" onClick={() => setPage(p => Math.min(pages, p + 1))}>Next</button></li>
      </ul>
    </nav>
  )
}
