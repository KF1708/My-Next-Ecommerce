import React from 'react'

const ProductId = async ({params}) => {
      const id = await params.id;
       
  return (
    <div>Product id: {id}</div>
  )
}

export default ProductId;