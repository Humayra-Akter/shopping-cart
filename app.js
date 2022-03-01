function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-num');
    const productNumText = productInput.value;
    let productNumber = parseInt(productNumText);
    if (isIncreasing == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;
    //update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;
    //caculate total
    calculateTotal()
}
//product calculation
function getInputValue(product) {
    const productInput = document.getElementById(product + '-num');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//caculate total
function calculateTotal() {
    const phnTotal = getInputValue('phn') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phnTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}
//handle phn number events
document.getElementById('phn-plus').addEventListener('click', function () {
    updateProductNumber('phn', 1219, true);
});
document.getElementById('phn-minus').addEventListener('click', function () {
    updateProductNumber('phn', 1219, false);
});
//handle case number events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
}); 
