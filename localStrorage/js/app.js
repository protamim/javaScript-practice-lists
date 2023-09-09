// Event to Add to cart button
document.getElementById('addBtn').addEventListener('click', () => {
    const productInput = document.getElementById('productInput');
    const quantityInput = document.getElementById('quantityInput');
    const productName = productInput.value;
    const quantity = quantityInput.value;
    // clear field after click
    productInput.value = '';
    quantityInput.value = '';
    // Condition checking for empty value
    if(productName === ''){
        alert('Please provide a product name');
        return;
    }else if(quantity === ''){
        alert('Please provide a quantity.');
        return;
    }else if(!isNaN(productName)){
        alert('Please provide a valid product name');
        return;
    }else if(quantity <= 0){
        alert('Please provide a valid number')
        return;
    }
    addCart(productName, quantity);
    saveProductsToLocalStrorage(productName, quantity)
})

// shows products to the cart
const addCart = (product, quantity) => {
    const cartContainer = document.getElementById('cart-container');
    // Create a dynamic element with a click
    const li = document.createElement('li');
    li.classList = `text-lg`;
    li.innerText = `${cartContainer.childElementCount + 1}. ${product.toUpperCase()} ${quantity}`;
    cartContainer.appendChild(li);
}

// shows products from browser's local storage
const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    // console.log(storedCart);
    if(storedCart){
        cart = JSON.parse(storedCart); // convert to an object
    }
    return cart;
}

const saveProductsToLocalStrorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
    // console.log(cartStringify)
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        addCart(product, quantity);
        console.log(product, quantity)
    }
    console.log(savedCart);
}

window.addEventListener('load', () => {
    displayProductsFromLocalStorage();
})