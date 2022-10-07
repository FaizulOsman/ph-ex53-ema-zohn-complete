import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, seller, price, img, rating } = product

    return (
        <div className='product'>
            <img src={img} alt="product img" />
            <div className='product-description'>
                <p className='product-heading'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-manufecturer'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {rating} star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='add-to-cart-btn'>
                <span>Add to cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;