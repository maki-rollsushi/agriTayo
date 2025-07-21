    // pages/PreOrderFormPage.jsx
import React, { useEffect } from 'react';

import { useParams, useLocation } from 'react-router-dom';

import PreOrderCard from '../components/PreOrderCard';

function PreOrderFormPage() {
    const { productId } = useParams();
    const location = useLocation();

    const { product, farmer } = location.state || {};

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);


    if (!product || !farmer) {
        return <div className="form-container">Product not found or missing data.</div>;
    }

    const handleOrderSubmit = (data) => {
        console.log('Order submitted:', data);
        //FUTURE CODE FOR SENDING DATA OF BUYERS
    };


    return (
        <div className="form-container">
            <section id='details'>
                <a href='/#marketplace' className='return-a'>← Continue Shopping</a>
            <div className="detail-card">
            <img src={product.imageUrl} alt={product.name} className="product-image-side" />
            <div className="product-info-block">
                <h2 className="product-title">{product.name}</h2>
                <div className="divider-line"></div>
                <div className='farmer-price'>
                    <p className="product-farmer"><span>Farmer: </span>{farmer.name}</p>                
                    <p className="detail-price">
                        ₱{product.pricePerKg} <br /><span><em>per kg</em></span>
                    </p>
                </div>


                <p className="product-description">{product.description}</p>

                <ul className="product-details">
                <li><strong>Variety:</strong> {product.variety}</li>
                <li><strong>Grow Time:</strong> {product.growTimeDays} days</li>
                <li><strong>Max Quantity:</strong> {product.maxQuantityKg} kg</li>
                </ul>

                <button onClick={() =>
                        document.getElementById('pre-order-form')?.scrollIntoView({ behavior: 'smooth' })
                    }className='detail-button'>
                    Pre-Order Now
                </button>
            </div>
            </div>
            </section>
            <section id='pre-order-form'>
                <PreOrderCard productId={product.name} onSubmit={handleOrderSubmit} />
            </section>

        </div>
        );
}
export default PreOrderFormPage;
