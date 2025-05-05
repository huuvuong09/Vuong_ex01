// let hour = +prompt("mời nhập giờ");
// let minute = +prompt("mời nhập phút");
// let second = +prompt("mời nhập vào giây");
// let isValidHour = false;
// let isValidMinute = false;
// let isValidSecond = false;
// let period = "";
// if (Number.isInteger(hour) === true && hour >= 0 && hour <= 23) {
//   isValidHour = true;
// }
// if (Number.isInteger(minute) === true && minute >= 0 && minute <= 59) {
//   isValidMinute = true;
// }
// if (Number.isInteger(second) === true && second >= 0 && second <= 59) {
//   isValidSecond = true;
// }
// if (isValidHour && isValidMinute && isValidSecond) {
//   if (hour === 0) {
//     hour = 12;
//     period = "am";
//   } else if (hour === 12) {
//     hour = 12;
//     period = "pm";
//   } else {
//     if (hour < 12) {
//       period = "am";
//     } else {
//       hour = hour - 12;
//       period = "pm";
//     }
//   }
//   if (hour < 10) {
//     hour = `0${hour}`;
//   }
//   if (minute < 10) {
//     minute = `0${minute}`;
//   }
//   if (second < 10) {
//     second = `0${second}`;
//   }
//   console.log(`thời gian quy đổi:${hour}:${minute}:${second}${period}`);
// } else {
//   console.log("thông tin không hợp lệ");
// }
// 1
// let n;
// // lặp liên tục cho đến khi đúng
// do {
//   let input = prompt("Nhập vào số nguyên dương N:");
//   n = parseInt(input);
//   //   ktra điều kiện
//   if (isNaN(n) || n <= 0) {
//     alert("bạn nhập sai! vui lòng nhập số nguyên dương lớn hơn 0");
//   }
// } while (isNaN(n) || n <= 0);
// // tạo tổng
// let sum = 0;
// // tính tổng
// for (let i = 1; i <= n; i = i++) {
//   sum += i;
// }
// // hiển thị kết quả
// console.log(`tổng các số từ 1 đeens ${n} là:${sum}`);
// alert(`tổng các số từ 1 đến ${n} là: ${sum}`);
// let n = +prompt("Nhập vào một số nguyên dương N:");
// // khởi tạo biến tổng
// let sum = 0;
// // kiểm tra nếu n hợp lệ
// if (isNaN(n) || n <= 0) {
//   console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
// } else {
//   // Sử dụng vòng lặp for để tính tổng
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   // in  kết quả
//   console.log(`Tổng các số từ 1 đến ${n} là: ${sum}`);
// }
//2
// let n;
// // yêu cầu người dùng nhập vào số nguyên dương
// do {
//   let input = prompt("Nhập vào một số nguyên dương N:");
//   n = parseInt(input);
//   if (isNaN(n) || n <= 0) {
//     alert("dữ liệu nhập không hợp lệ!");
//   }
// } while (isNaN(n) || n <= 0);
// console.log(`Các số chia hết cho 5 từ 1 đến ${n} là:`);
// // in ra các số chia hết cho 5
// for (let i = 1; i <= n; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
//Viết chương trình nhập vào n là số số fibonacci sẽ hiển thị
// let n;
// do {
//   let input = prompt("Nhập vào số lượng số Fibonacci cần hiển thị:");
//   n = Number(input);

//   if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
//     alert("không hợp lệ");
//   }
// } while (isNaN(n) || n <= 0 || !Number.isInteger(n));
// let f0 = 1;
// let f1 = 1;
// console.log(`Dãy ${n} số Fibonacci đầu tiên là:`);
// for (let i = 0; i < n; i++) {
//   if (i === 0) {
//     console.log(f0);
//   } else if (i === 1) {
//     console.log(f1);
//   } else {
//     let next = f0 + f1;
//     console.log(next);
//     f0 = f1;
//     f1 = next;
//   }
// }
//Viết chương trình hiển thị thay đổi 10 màu sắc ngẫu nhiên khi hiển thị console.log()
// let letters = "0123456789ABCDEF";
// for (let i = 1; i <= 10; i++) {
//   let color = "#";
//   for (let j = 0; j < 6; j++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   console.log(
//     `%cMàu sắc đã được thay đổi`,
//     `color: ${color}; font-weight: bold;`
//   );
// }
// Viết chương trình nhập vào 1 số nguyên, thực hiện kiểm tra số đó có phải là số nguyên tố hay không
// let number;
// // Yêu cầu người dùng nhập vào một số nguyên
// do {
//   number = +prompt(
//     "Nhập vào một số nguyên để kiểm tra có phải là số nguyên tố không:"
//   );
//   if (isNaN(number) || number <= 1 || !Number.isInteger(number)) {
//     alert("Vui lòng nhập một số nguyên lớn hơn 1.");
//   }
// } while (isNaN(number) || number <= 1 || !Number.isInteger(number));
// // Kiểm tra số nguyên tố
// let isPrime = true;
// // Kiểm tra chia hết cho các số từ 2 đến sqrt(number)
// for (let i = 2; i <= Math.sqrt(number); i++) {
//   if (number % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// // In kết quả
// if (isPrime) {
//   console.log(`${number} là số nguyên tố.`);
//   alert(`${number} là số nguyên tố.`);
// } else {
//   console.log(`${number} không phải là số nguyên tố.`);
//   alert(`${number} không phải là số nguyên tố.`);
// }
//Viết chương trình in ra các số nguyên từ 1 đến 100. Nhưng đối với bội số của ba in "Fizz" và đối với bội số của năm in "Buzz". Đối với bội số của cả ba và năm in ra "FizzBuzz".
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// Viết chương trình yêu cầu người dùng nhập vào một số nguyên bất kỳ, in ra tất cả các ước của số đã nhập
// let number;
// Yêu cầu người dùng nhập vào một số nguyên
// do {
//   number = +prompt("Nhập vào một số nguyên để tìm các ước:");
//   if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
//     alert("Vui lòng nhập một số nguyên dương.");
//   }
// } while (isNaN(number) || number <= 0 || !Number.isInteger(number));
// Tìm các ước của số đã nhập
// let divisors = [];
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     divisors.push(i);
//   }
// }
// In ra các ước
// console.log(`Các ước của số ${number} là:`);
// console.log(divisors.join(", "));
// alert(`Các ước của số ${number} là: ${divisors.join(", ")}`);
