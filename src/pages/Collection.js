import React from 'react'
import './Collection.css'
import Offers from '../components/Offers'
import ProductsCart from '../components/ProductsCart'

const Collection = () => {
    return (
        <div className='collection-container'>
            <ProductsCart />
            <Offers />
        </div>
    )
}

export default Collection
