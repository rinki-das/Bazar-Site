import React, { useEffect, useState } from 'react';
import './Home.css'; 
import Carousel from './Carousel';

const Home = () => {
    const items = [
        { title: 'Card 1', description: 'Description for card 1', imageUrl: '../images/icon06.JPG' },
        { title: 'Card 2', description: 'Description for card 2', imageUrl: '../images/icon33.JPG' },
        { title: 'Card 3', description: 'Description for card 3', imageUrl: '../images/icon34.JPG' },
        { title: 'Card 4', description: 'Description for card 4', imageUrl: '../images/icon35.JPG' },
        { title: 'Card 5', description: 'Description for card 5', imageUrl: '../images/icon36.JPG' },
        { title: 'Card 6', description: 'Description for card 6', imageUrl: '../images/icon06.JPG' }
    ];
    const numItems = Math.ceil(items.length / 2); // Number of slides needed to show 2 items per slide
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Auto slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === numItems - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? numItems - 1 : prevIndex - 1));
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling behavior
        });
    };


    // Function to handle scroll event
    const handleScroll = () => {
        // Show scroll button if user scrolls below 100 pixels
        if (window.pageYOffset > 100) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    // scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <Carousel />

            {/* Header and subheader */}
            <div className="welcome-container">
                <h1 className="welcome-header">Welcome To BazarMoynaguri</h1>
                <p className="welcome-subheader">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae pharetra erat. Fusce quis suscipit leo. Nulla scelerisque erat in nam at efficitur tortor, vitae porttitor mi. Morbi sit amet velit nec leo imperdiet porttitor mi. Morbi sit amet velit nec leo imperdiet.
                </p>
            </div>

            {/* Image container */}
            <div className="image-container">
                <img src={require('../icon05.jpg')} alt="Image" className="centered-image" />
            </div>

            <div className="top-line"></div>

            {/* Features container */}
            <div className="features-container">
                <div className="feature-item">
                    <img src="../images/icon12.png" alt="Best Quality Product" />
                    <h3>Best Quality Product</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="feature-item">
                    <img src="../images/icon11.png" alt="Free Shipping" />
                    <h3>Free Shipping</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="feature-item">
                    <img src="../images/icon10.png" alt="On Time Delivery" />
                    <h3>On Time Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>

            <div className="bottom-line"></div>

            {/* Button container */}
            <div className="button-container">
                <button className="custom-button">
                    <img src="../images/icon09.png" alt="Button Image" className="button-image" />
                    <span className="button-text">Quality product at your doorstep</span>
                </button>
            </div>

            {/* Cards container */}
            <div className="cards-container">
                {/* Map through your data to render cards */}
                {items.slice(currentIndex * 2, currentIndex * 2 + 2).map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <img src={item.imageUrl} alt={item.title} className="card-image" />
                    </div>
                ))}
            </div>

            {/* Navigator (Dots) */}
            <div className="navigator">
                {Array.from({ length: numItems }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>

            
{/* Our Products Header and Subheader */}
<div className="products-header">
    <h2 className="products-header-text">Our Products</h2>
    <p className="products-subheader">Shopping made easy</p>
</div>

<div className="image-containers">
                <img src={require('../icon05.jpg')} alt="Image" className="centered-image" />
            </div>
            <div className="horizontal-cards-container-custom">
    <div className="horizontal-card-custom">
        <div className="product-box">
            <div className="product-image">
                <img src="../images/icon15.jpg" alt="Image 1" className="product-img" />
                <button className="enquiry-button">Call for Enquiry</button>
            </div>
            <div className="product-desc">
                <p className="product-name">Product name 1</p>
                <p className="product-price">Rs 49</p>
            </div>
        </div>
    </div>
    <div className="horizontal-card-custom">
        <div className="product-box">
            <div className="product-image">
                <img src="../images/icon17.jpg" alt="Image 1" className="product-img" />
                <button className="enquiry-button">Call for Enquiry</button>
            </div>
            <div className="product-desc">
                <p className="product-name">Product name 1</p>
                <p className="product-price">Rs 49</p>
            </div>
        </div>
    </div>
    <div className="horizontal-card-custom">
        <div className="product-box">
            <div className="product-image">
                <img src="../images/icon21.jpg" alt="Image 1" className="product-img" />
                <button className="enquiry-button">Call for Enquiry</button>
            </div>
            <div className="product-desc">
                <p className="product-name">Product name 1</p>
                <p className="product-price">Rs 49</p>
            </div>
        </div>
        
    </div>
    <div className="horizontal-card-custom">
        <div className="product-box">
            <div className="product-image">
                <img src="../images/icon29.png" alt="Image 1" className="product-img" />
                <button className="enquiry-button">Call for Enquiry</button>
            </div>
            <div className="product-desc">
                <p className="product-name">Product name 1</p>
                <p className="product-price">Rs 49</p>
            </div>
        </div>
    </div>

    
</div>
<div className="horizontal-cards-container-custom">
    <div className="horizontal-card-custom">
        <div className="product-box">
            <div className="product-image">
                <img src="../images/icon18.png" alt="Image 1" className="product-img" />
                <button className="enquiry-button">Call for Enquiry</button>
            </div>
            <div className="product-desc">
                <p className="product-name">Product name 1</p>
                <p className="product-price">Rs 49</p>
            </div>
        </div>
    </div>
    <div className="horizontal-card-custom">
        <div className="product-box">
            <div className="product-image">
                <img src="../images/icon16.jpg" alt="Image 1" className="product-img" />
                <button className="enquiry-button">Call for Enquiry</button>
            </div>
            <div className="product-desc">
                <p className="product-name">Product name 1</p>
                <p className="product-price">Rs 49</p>
            </div>
        </div>
    </div>
    <div className="horizontal-card-custom">
        <div className="product-box">
            <div className="product-image">
                <img src="../images/icon22.jpg" alt="Image 1" className="product-img" />
                <button className="enquiry-button">Call for Enquiry</button>
            </div>
            <div className="product-desc">
                <p className="product-name">Product name 1</p>
                <p className="product-price">Rs 49</p>
            </div>
        </div>
        
    </div>
    <div className="horizontal-card-custom">
        <div className="product-box">
            <div className="product-image">
                <img src="../images/icon30.jpg" alt="Image 1" className="product-img" />
                <button className="enquiry-button">Call for Enquiry</button>
            </div>
            <div className="product-desc">
                <p className="product-name">Product name 1</p>
                <p className="product-price">Rs 49</p>
            </div>
        </div>
    </div>

    
</div>

{showScrollButton && (
                <button className="scroll-top-button" onClick={scrollToTop}>
                    &#9650; 
                </button>
            )}

        </div>
    );
};

export default Home;
