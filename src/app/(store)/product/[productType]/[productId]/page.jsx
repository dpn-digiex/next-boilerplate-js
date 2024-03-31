'use client'

const ProductDetailPage = ({ params: { productType, productId } }) => {
  return (
    <div>
      <h1>Sản phẩm: {productType || 'Laptop'}</h1>
      <h1>ID sản phẩm: {productId || 'Macbook'}</h1>
    </div>
  )
}

export default ProductDetailPage
