import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const { totalProducts } = useLoaderData();

    const totalPages = Math.ceil(totalProducts / itemsPerPage)
    // console.log(totalPages)

    const pageNumbers = [...Array(totalPages).keys()];

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    useEffect(() => {

        async function fetchData() {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json();
            setProducts(data);
        }
            fetchData();
        }, [currentPage, itemsPerPage]);

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

const options = [5, 10, 20]
const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value))
    setCurrentPage(0)
}

return (
    <>
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
        <div className="pagination">
            <p>Current Page: {currentPage}</p>
            {
                pageNumbers.map(number => <button
                    key={number}
                    className={currentPage === number ? 'seleted' : ''}
                    onClick={() => setCurrentPage(number)}
                >
                    {number}
                </button>)
            }
            <select value={itemsPerPage} onChange={handleSelectChange}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}

            </select>
        </div >
    </>
);
};

export default Shop;