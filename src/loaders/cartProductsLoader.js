const cartProductsLoader = async() =>{
    const loadedProducts = await('products.json');
    const products = await loadedProducts.json();
    console.log(products)
}

export default cartProductsLoader;