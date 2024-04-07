'use client'

const ProductTypePage = ({ isDefaultPage = false, params }) => {
  return (
    <div>
      <h1>Sản phẩm: {isDefaultPage ? 'laptop' : params?.productType}</h1>
    </div>
  )
}

export default ProductTypePage
