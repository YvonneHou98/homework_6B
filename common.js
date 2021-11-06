//get the saved cart from local storage, and parse the result
const storedValue = JSON.parse(localStorage.getItem('savedCart'));
// Does storedValue exist? If so, set cart equal to storedValue. If not, set cart equal to an empty Array
const cart = storedValue ? storedValue : []

function Product (productType,productColor, productFill,productQuantity) {
    this.type = productType;
    this.color = productColor;
    this.fill = productFill;
    this.quantity = productQuantity;
}