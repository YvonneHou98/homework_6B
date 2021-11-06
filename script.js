var newType;
var newColor;
var newFill;
var newQuantity;
var totalPrice = document.getElementById("total-price");



function changeType(n){
    newType = n;
    if (newType == "Bed Pillow") {
        document.getElementById("prod-type").innerHTML = "Selected Type: Bed Pillow";
    }
    if (newType == "Couch Pillow") {
        document.getElementById("prod-type").innerHTML = "Selected Type: Couch Pillow";
    }
    if (newType == "Round Pillow") {
        document.getElementById("prod-type").innerHTML = "Selected Type: Round Pillow";
    }
    if (newType == "Floor Pouf Pillow") {
        document.getElementById("prod-type").innerHTML = "Selected Type: Floor Pouf Pillow";
    }   
}

function changeColor(n){
    newColor = n;
    if (newColor == "Rainy day") {
        document.getElementById("prod-color").innerHTML = "Selected Color: Rainy day";
        document.getElementById("previewImg").src = "pic/preview-Rainy day.png";
    }
    if (newColor == "Morning haze") {
        document.getElementById("prod-color").innerHTML = "Selected Color: Morning haze";
        document.getElementById("previewImg").src = "pic/preview-Morning haze.png";
    }
    if (newColor == "Cozy denim") {
        document.getElementById("prod-color").innerHTML = "Selected Color: Cozy denim";
        document.getElementById("previewImg").src = "pic/preview-Cozy denim.png";
    }
    if (newColor == "After school special") {
        document.getElementById("prod-color").innerHTML = "Selected Color: After school special";
        document.getElementById("previewImg").src = "pic/preview-After school special.png";
    }   
}

function changeFill(n){
    newFill = n;
    if (newFill == "Duck down") {
        document.getElementById("prod-fill").innerHTML = "Selected Fill: Duck down";
    }
    if (newFill == "Hypoallergenic poly-blend") {
        document.getElementById("prod-fill").innerHTML = "Selected Fill: Hypoallergenic poly-blend";
    }
    if (newFill == "Memory foam") {
        document.getElementById("prod-fill").innerHTML = "Selected Fill: Memory foam";
    }
}

function changeQuantity(n){
    newQuantity = n;
    document.getElementById("total-price").innerHTML = "$ " + 35 * newQuantity;
}

