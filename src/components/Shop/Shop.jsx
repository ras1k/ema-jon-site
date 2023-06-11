import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // useEffect(()=>{
    //     const storedCart = getShoppingCart();
    //     for (const id in storedCart){
    //         const addedProduct = products.find(product => product._id === id);
    //         const quantity = storedCart[id];
    //         addedProduct.quantity = quantity;
    //     }
    // },[products]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);

            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        const exists = cart.find(pd => pd._id == product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product._id);
        console.log(product._id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to="/orders" className='proceed-link'>
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;