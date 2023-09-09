// Accessing child elements from product container
document.querySelectorAll('.product').forEach(productContainer =>{
    productContainer.addEventListener('click', function(){
       const productNameElemnt = productContainer.querySelector('.product-name');
       const productName = productNameElemnt.innerText;
       const productPriceElemnt = productContainer.querySelector('.product-price');
       const productPrice = parseFloat(productPriceElemnt.innerText);

       // Display products name to the cart
       const cart = document.getElementById('cart');
       const selectedProducts = document.createElement('h4');
       selectedProducts.innerHTML =`${cart.childElementCount + 1}. ${productName}`;
       cart.appendChild(selectedProducts);

       // Display products total price to the cart
       const totalElemnt = document.getElementById('total-price');
       const totalPrice = parseFloat(totalElemnt.innerText) + productPrice;
       totalElemnt.innerText = totalPrice.toFixed(2);
    })
})



