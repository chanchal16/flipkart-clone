import React from 'react'

export const ProductCard = ({product}) => {
  return (
    <div className="bg-white w-52 flex flex-col rounded border border-gray-3 shadow-md-gray-1 mb-4 p-2">
        <h3 className="text-gray-5 font-medium mb-2">{product.name}</h3>
        <img src={product.imgsrc} alt="product" className="w-24 h-32" style={{margin: "auto"}} />

        <div className="mt-2 mb-2 flex justify-between items-center">
            <h4 className="text-gray-5 mt-2">$ {product.price}</h4>
            <small className='my-auto'>Brand: {product.brand}</small>
        </div>
        <div className="mt-2 mb-2 flex justify-between items-center">
            <small className="text-gray-5">Size: {product.size}</small>
        </div>
    </div>
  )
}
