import React from 'react'
import Carousel from '../components/Carousels';
import Products from '../components/ProductsCart';
import Description from '../components/Description';
import Delivery from '../components/Delivery';
import Offers from '../components/Offers';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Delivery />
            <Products />
            <Description />
            <Offers />
        </div>
    )
}

export default Home
