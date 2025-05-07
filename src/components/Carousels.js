import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../Images/freepik__adjust__43745.png'
import './Carousels.css'
import { useNavigate } from 'react-router-dom';

const Carousels = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        src={CarouselImage}
                        alt="gift-image"
                        className='carousel-img'
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h5>Gift shop</h5>
                        <h1>Welcome to Dream Chaser</h1>
                        <p>Find the perfect gift for your loved ones</p>
                        <button onClick={() => navigate("/Collection")}>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={CarouselImage}
                        alt="gift-image"
                        className='carousel-img'
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h5>Gift shop</h5>
                        <h1>Welcome to Dream Chaser</h1>
                        <p>Find the perfect gift for your loved ones</p>
                        <button onClick={() => navigate("/Collection")}>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousels
