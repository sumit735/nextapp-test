import { Products } from '@/types'
import React from 'react'
import ProductCard from './ProductCard'

function ProductList({products}: {products: Products[]}) {
    // filter top 20
    products = products.slice(0, 20)
    return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 py-2 max-w-7xl mx-auto border rounded'>
            {products.map((product) =>
                <ProductCard key={product.id} product={product}/>
            )}
        </div>
    )
}

export default ProductList