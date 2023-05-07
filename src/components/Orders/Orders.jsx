import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    // console.log(savedCart)
    const [cart, setCart] = useState(savedCart);
    // console.log(cart)
    // const removeFromCart = (id) => {
    //     const remaining = cart.filter(product => product.id !== id);
    //     setCart(remaining);
    //     console.log(id)
    // }
    const removeFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'> 
            <div className='review-container'>
                {
                    savedCart.map(product => <ReviewItem 
                        key={product.id}
                        product={product}
                        removeFromCart={removeFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;