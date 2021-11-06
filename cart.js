var totalPrice = document.getElementById("total-price");

function calculateTotal() {
    let total = 0;
    for (element of cart) {
       // console.log(element.quantity);
        total += (element.quantity)*35;
    }
    totalPrice.innerHTML = total.toFixed(2);
}



function showProductInCart(product) {
    var template = document.getElementById("cart-item-template");
    const clone = template.content.cloneNode(true); 
    console.log("product is " + JSON.stringify(product))
   
    clone.querySelector('.product-img').src = 'pic/preview-' + product.color + '.png';
    clone.querySelector('.product-quantity').innerText = product.quantity; 
    clone.querySelector('.product-type').innerText = product.type; 
    clone.querySelector('.product-fill').innerText = product.fill;
    clone.querySelector('.product-color').innerText = product.color;
    const cartElement = document.getElementById("cart");

    const button = clone.querySelector('.btn-remove'); 
    button.addEventListener('click', function() {
        // find and remove object from cart
        var index = cart.findIndex (function(obj) {
            return obj.type === product.type && obj.color === product.color 
            && obj.fill === product.fill && obj.quantity === product.quantity })
            if (index !== -1){
                console.log (index);
                cart.splice (index,1);
                localStorage.setItem ('savedCart', JSON.stringify(cart));
                // re-render the page to reflect changes
                window.location.reload()
            } 
       
    })
    cartElement.appendChild(clone);
   
}

window.onload = function () {
    console.log("cart is " + JSON.stringify(cart))
    for (const item of cart) {
        console.log("item is " + JSON.stringify(item))
        showProductInCart(item);
    }
    calculateTotal();
}
