import React from 'react'
import Image1 from '../Images/IMG-20250329-WA0042.jpg'
import Image2 from '../Images/WhatsApp Image 2025-03-29 at 10.25.09_000a8aa3.jpg'
import Image3 from '../Images/WhatsApp Image 2025-03-29 at 10.24.25_bf62b356.jpg'
import Image4 from '../Images/WhatsApp Image 2025-03-29 at 10.16.20_7e9f2995.jpg'
import Image5 from '../Images/WhatsApp Image 2025-03-29 at 10.25.15_785a9026.jpg'
import Image6 from '../Images/WhatsApp Image 2025-03-29 at 10.20.08_465e7e56.jpg'
import Image7 from '../Images/upscaled_new_image.jpg'
import Image8 from '../Images/upscaled_image (1).jpg'
import Image9 from '../Images/upscaled_image (2).jpg'
import Image10 from '../Images/WhatsApp Image 2025-03-29 at 10.19.59_b3de64b6.jpg'
import Image11 from '../Images/WhatsApp Image 2025-03-29 at 10.24.22_bf467dc3.jpg'
import Image12 from '../Images/upscaled_image.jpg'
import './ProductsCart.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Products = () => {

  const navigate = useNavigate()

  return (
    <Container className='product-cart'>
      <div>
        <h2 className='product-heading'>Top Categories</h2>
        <div className='block'>
          <div className='block-1'><img src={Image1} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image2} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image3} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image4} alt='product-img' className='img' /></div>
        </div>
      </div>

      <div>
        <h2 className='product-heading'>Popular Products</h2>
        <div className='block'>
          <div className='block-1'><img src={Image5} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image6} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image7} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image8} alt='product-img' className='img' /></div>
        </div>
      </div>

      <div>
        <h2 className='product-heading'>Top Sales Products</h2>
        <div className='block'>
          <div className='block-1'><img src={Image9} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image10} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image11} alt='product-img' className='img' /></div>
          <div className='block-1'><img src={Image12} alt='product-img' className='img' /></div>
        </div>
      </div>

      <div className='product-button'>
        <button onClick={() => navigate("/Collection")}>Show More ⟫</button>
      </div>

    </Container>
  )
}

export default Products
