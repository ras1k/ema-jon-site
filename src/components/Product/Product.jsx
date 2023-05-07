import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddToCart }) => {
    const { img, price, name, seller, ratings } = product;
    // const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                Add To Cart &nbsp;
                <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
        </div>
    );
};

export default Product;