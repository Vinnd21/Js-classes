function calculatecircleArea(radius) {
    return 2 * Math.PI * radius;
}
console.log(Math.PI);
console.log(calculatecircleArea(10));

const symbols = "!@#$%^&*()_+{}|:<>?-=[];',./`~";
function randomPassword(random) {
    return Math.random().toString(36).slice(-8).concat(symbols.charAt(Math.floor(Math.random() * symbols.length)));
}
console.log(randomPassword());

function salesTax(price, tax) {
    return price + (price * tax);
}
console.log(salesTax(416, 0.23));