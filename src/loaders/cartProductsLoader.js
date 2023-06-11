import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('http://localhost:5000/products');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCard = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd._id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCard.push(addedProduct);
        }
    }

    return savedCard;
}

export default cartProductsLoader;