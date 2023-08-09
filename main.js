  // currency

let dollar = 11000.34; // sum
let evro = 12354.03; // sum

// costs

let ticket = 500; // dollar
let hotelPay = 250; // dollar
let tripPlace = 120; // evro
let ovveralDollar = (ticket + hotelPay) * dollar;
let ovveralEvro = tripPlace * evro;
let ovveral = ovveralDollar + ovveralEvro;

// service

let cash = prompt('How much money do you have?')
let exact = cash - ovveral;

if(exact >= 0) {
    console.log("Oq yo'l");
}else {
    console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan");
}10