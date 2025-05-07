import React from 'react'
import './Offers.css'
import OfferImage from '../Images/Header.webp'
import { useNavigate } from 'react-router-dom'


const Offers = () => {

    const navigate = useNavigate()

    return (
        <div className='offer-container'>
            <div className='offer-content'>
                <h1>15% off for All Items</h1>
                <button onClick={() => navigate("/Collection")}>Shop</button>
            </div>
            <div className='offer-image'>
                <img src={OfferImage} alt='offer-img' className='offer-img' />
            </div>
        </div>
    )
}

export default Offers
