import React from 'react'
import './Description.css'
import Image1 from '../Images/young-artist-is-mixing-paint-her-new-project-art-studio-background.jpg'
import { Container } from 'react-bootstrap'

const Description = () => {
    return (
        <Container>
            <div className='description-container'>
                <img src={Image1} alt='description-img' className='description-image' />
                <div className='description-content'>
                    <h2>Experience the Magic of Resin Art – Where Creativity Meets Elegance! ✨</h2>
                    <p>
                        Looking for a unique, luxurious, and personalized gift? Or a stunning
                        piece to elevate your home décor? Our handcrafted resin art creations
                        bring a touch of sophistication, beauty, and exclusivity to every space.
                    </p>
                    <ul>
                        <li>✅ One-of-a-Kind Designs – No two pieces are ever the same!</li>
                        <li>✅ Crystal-Clear Gloss & Durability – A timeless masterpiece that lasts.</li>
                        <li>✅ Customizable for You – Choose your colors, patterns, and even embed special memories.</li>
                        <li>✅ Perfect for Gifting – Surprise your loved ones with something truly special.</li>
                    </ul>
                    <p>✨ Bring Home the Elegance of Resin Art! ✨</p>
                    <p>Explore our collection or customize your own masterpiece today. Because art isn’t just decoration—it’s an expression of your style and personality! 💖</p>
                </div>
            </div>
        </Container>
    )
}

export default Description
