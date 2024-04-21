import { Products } from '@/types'
import Link from 'next/link'
import React from 'react'

function ProductCard({ product }: { product: Products }) {

    return (
        <div key={product.id} className='gap-5 p-5 shadow-md border-primary-50'>
            <h2 className='text-xl font-semibold line-clamp-1 text-primary-500 text-balance uppercase'>{product.title}</h2>
            <p className='text-gray-500 line-clamp-2 mt-2'>{product.body}</p>
            <Link className='mt-2 border border-primary-50 py-1 px-2 text-primary-500 text-sm inline-block hover:bg-primary-200 hover:text-white transition rounded-md' href={`/product/${product.id}`}>View Details</Link>
        </div>
    )
}

export default ProductCard