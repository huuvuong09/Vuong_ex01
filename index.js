// var fullName = "Vượng";
// let age = 12;
// const handsome = false;
// var school = "Phúc Yên";
// var code = 100;
// let price = 1000;
// price = 15000;
// code = 300;
// console.log(number1 + numnber2);
// console.log(number1 - numnber2);
// console.log(number1 * numnber2);
// console.log(number1 / numnber2);
// console.log(number1 % numnber2);
// console.log(number1 ** numnber2);
// let number1 = 18;
// let numnber2 = 100;
// let number3 = 2.3;
// let age = prompt("nhập tuổi")
// console.log(age);
// let number1 = +prompt("nhấp số 1");
// let number2 = +prompt("nhấp số 2");
// let sum = number1 + number2;
// console.log (sum);
// bài 1
let width = +prompt("nhập độ rộng");
let height = +prompt("nhập độ dài");
let sum = width + height;
console.log(sum);
//bài 2
let firstNumber = +prompt("nhấp số 1");
let secondNumber = +prompt("nhấp số 2");
let tong = firstNumber + secondNumber;
alert(tong);
//bài 3
let balance = 25.0;
let amountUSD = +prompt("Nhập số tiền muốn đổi USD");
let amountVND = amountUSD * balance;
alert(`${amountUSD} USD=${amountVND}VND`);
//bài 4
let math = +prompt("nhập điểm môn toán");
let physics = +prompt("nhập điểm môn lý");
let chemistry = +prompt("nhập điểm môn văn");
let sum2 = (math + physics + chemistry) / 3;
console.log("Điểm trung bình = " + sum2);
// bài 5
let temperature = parseFloat(prompt("Nhập nhiệt độ:"));
let unit = prompt(
  "Nhập đơn vị (C: Celsius, F: Fahrenheit, K: Kelvin):"
).toUpperCase();
let conversions = {
  C: {
    fahrenheit: (temperature) => (temperature * 9) / 5 + 32,
    kelvin: (temperature) => temperature + 273.15,
  },
  F: {
    celsius: (temperature) => ((temperature - 32) * 5) / 9,
    kelvin: (temperature) => ((temperature - 32) * 5) / 9 + 273.15,
  },
  K: {
    celsius: (temperature) => temperature - 273.15,
    fahrenheit: (temperature) => ((temperature - 273.15) * 9) / 5 + 32,
  },
};
let result =
  unit in conversions
    ? `Celsius: ${conversions[unit].celsius(
        temperature
      )}°C, Fahrenheit: ${conversions[unit].fahrenheit(
        temperature
      )}°F, Kelvin: ${conversions[unit].kelvin(temperature)}K`
    : "Đơn vị không hợp lệ. Vui lòng nhập C, F, hoặc K.";
alert(result);
// bài 6
let principal = +prompt("nhập số tiền gốc");
let rate = 4.3 / 100;
let months = +prompt("nhập số tháng gửi tiền");
let monthsRate = rate / 12;
let simple = principal * monthsRate * months;
let total = principal + simple;
alert(`Tiền lãi đơn là:${simple.toFixed(2)}VND`);
alert(`số tiền nhận được là:${total.toFixed(2)}VND`);
