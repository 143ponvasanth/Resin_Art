import React from 'react'
import './Delivery.css'

const Delivery = () => {
    return (
        <div className='delivery-container'>
            <div className='delivery-details'>
                <div className='icon'>
                    <i className="fas fa-truck"></i>
                </div>
                <div className='delivery-content'>
                    <h5>Delivery quality gift</h5>
                    <p>information on its origins</p>
                </div>
            </div>
            <div className='delivery-details'>
                <div className='icon'>
                    <i className="fas fa-gift"></i>
                </div>
                <div className='delivery-content'>
                    <h5>Gift for all Occession</h5>
                    <p>information on its origins</p>
                </div>
            </div>
            <div className='delivery-details'>
                <div className='icon'>
                    <i className="fas fa-headset"></i>
                </div>
                <div className='delivery-content'>
                    <h5>Happy Service</h5>
                    <p>information on its origins</p>
                </div>
            </div>
        </div>
    )
}

export default Delivery
