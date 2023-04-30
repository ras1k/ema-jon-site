// import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, price, name, seller, quantity, ratings } = props.product;

    const handleAddToCart = () =>{
        console.log('lol')
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button className='btn-cart' onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
};

export default Product;