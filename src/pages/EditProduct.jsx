import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductForm from '../components/ProductForm';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find(p => String(p.productoId) === String(id));
    if (found) setProduct(found);
  }, [products, id]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="container mt-3">
      <h2>Editar producto</h2>
      <ProductForm
        product={product}
        onSaved={() => navigate('/admin')}
      />
    </div>
  );
}
