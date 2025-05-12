// let numberN = +prompt("mời bạn nhập vào số nguyên dương");
// if (!Number.isInteger(numberN) || numberN <= 1) {
//   console.log("giá trị nhập k hợp lệ");
// } else {
//   let flag = false;
//   for (let i = 2; i < numberN; i++) {
//     if (numberN % i === 0) {
//       flag = true;
//       break;
//     }
//   }
//   if (flag) {
//     console.log(`số $ {numberN} k phải số nguyên tố`);
//   } else {
//     console.log(`số $ {numberN} là số nguyên tố`);
//   }
// }
// let n = +prompt("mời nhập số ");
// let number1 = 1;
// let number2 = 1;
// let fiboResult = `${number1}, ${number2}`;
// for (let i = 1; i <= n - 2; i++) {
//   let next = number1 + number2;
//   fiboResult = fiboResult + `, ${next}`;
//   number1 = number2;
//   number2 = next;
// }
// console.log(fiboResult);
// let name = "";
// let age = 0;
// let choice = "";

// do {
//   choice = prompt(
//     "=== MENU QUẢN LÝ THÔNG TIN ===\n\n" +
//       "1. Nhập tên người dùng\n" +
//       "2. Nhập tuổi người dùng\n" +
//       "3. Kiểm tra người dùng đủ tuổi trưởng thành chưa\n" +
//       "4. In ra tên viết hoa\n" +
//       "5. Thoát\n\n" +
//       "Lựa chọn của bạn:"
//   );

//   switch (choice) {
//     case "1":
//       name = prompt("Nhập tên người dùng:");
//       break;
//     case "2":
//       let inputAge = prompt("Nhập tuổi người dùng:");
//       age = parseInt(inputAge);
//       if (isNaN(age) || age < 0) {
//         alert("Tuổi không hợp lệ. Vui lòng nhập lại.");
//         age = 0;
//       }
//       break;
//     case "3":
//       if (age >= 18) {
//         alert(name + " đã đủ tuổi trưởng thành.");
//       } else {
//         alert(name + " chưa đủ tuổi trưởng thành.");
//       }
//       break;
//     case "4":
//       if (name) {
//         alert("Tên viết hoa: " + name.toUpperCase());
//       } else {
//         alert("Bạn chưa nhập tên.");
//       }
//       break;
//     case "5":
//       alert("Tạm biệt!");
//       break;
//     default:
//       alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
//   }
// } while (choice !== "5");

// let choice = "";
// let correctCount = 0;
// let wrongCount = 0;

// do {
//   choice = prompt(
//     "=== MENU BẢNG CỬU CHƯƠNG NÂNG CAO ===\n\n" +
//       "1. Hiển thị bảng cửu chương từ 1 đến 9\n" +
//       "2. Hiển thị bảng cửu chương của một số cụ thể\n" +
//       "3. Kiểm tra kết quả phép nhân\n" +
//       "4. Hiển thị bảng cửu chương ngược\n" +
//       "5. Luyện tập bảng nhân với số lần tùy chọn\n" +
//       "6. Thống kê kết quả đúng/sai\n" +
//       "7. Thoát\n\n" +
//       "Lựa chọn của bạn:"
//   );

//   switch (choice) {
//     case "1":
//       let result1 = "";
//       for (let i = 1; i <= 9; i++) {
//         for (let j = 1; j <= 10; j++) {
//           result1 += `${i} x ${j} = ${i * j}\n`;
//         }
//         result1 += "\n";
//       }
//       alert(result1);
//       break;

//     case "2":
//       let num = parseInt(prompt("Nhập số cần hiển thị bảng cửu chương (1-9):"));
//       if (isNaN(num) || num < 1 || num > 9) {
//         alert("Số không hợp lệ. Vui lòng nhập từ 1 đến 9.");
//       } else {
//         let result2 = "";
//         for (let i = 1; i <= 10; i++) {
//           result2 += `${num} x ${i} = ${num * i}\n`;
//         }
//         alert(result2);
//       }
//       break;

//     case "3":
//       let a = Math.floor(Math.random() * 9) + 1;
//       let b = Math.floor(Math.random() * 10) + 1;
//       let userAnswer = parseInt(prompt(`Kết quả của ${a} x ${b} = ?`));
//       if (userAnswer === a * b) {
//         alert("Chính xác!");
//         correctCount++;
//       } else {
//         alert(`Sai! Đáp án đúng là ${a * b}`);
//         wrongCount++;
//       }
//       break;

//     case "4":
//       let result4 = "";
//       for (let i = 9; i >= 1; i--) {
//         for (let j = 10; j >= 1; j--) {
//           result4 += `${i} x ${j} = ${i * j}\n`;
//         }
//         result4 += "\n";
//       }
//       alert(result4);
//       break;

//     case "5":
//       let times = +prompt("Bạn muốn luyện tập bao nhiêu phép nhân?");
//       if (isNaN(times) || times <= 0) {
//         alert("Số lần không hợp lệ.");
//       } else {
//         for (let i = 0; i < times; i++) {
//           let x = Math.floor(Math.random() * 9) + 1;
//           let y = Math.floor(Math.random() * 10) + 1;
//           let ans = parseInt(prompt(`Câu ${i + 1}: ${x} x ${y} = ?`));
//           if (ans === x * y) {
//             alert("Đúng!");
//             correctCount++;
//           } else {
//             alert(`Sai! Đáp án là ${x * y}`);
//             wrongCount++;
//           }
//         }
//       }
//       break;

//     case "6":
//       alert(`Số câu đúng: ${correctCount}\nSố câu sai: ${wrongCount}`);
//       break;

//     case "7":
//       alert("Tạm biệt!");
//       break;

//     default:
//       alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 7.");
//   }
// } while (choice !== "7");
// let todoListOfDiep = ["Nhậu tăng 1", "Karaoke tăng 2", "Mát trườn tăng 3"];
// let choice = "";
// do {
//   choice = prompt(
//     "--------- MENU -----------\n" +
//       "1. Thêm mới 1 công việc vào danh sách\n" +
//       "2. Hiển thị toàn bộ công việc trong danh sách\n" +
//       "3. Cập nhật công việc trong danh sách tại vị trí Diệp mong muốn\n" +
//       "4. Xoá một công việc tại vị trí Diệp mong muốn\n" +
//       "5. Thoát\n"
//   );
//   switch (choice) {
//     case "1":
//       let newTask = prompt("Nhập công việc mới:");
//       if (newTask) {
//         todoListOfDiep.push(newTask);
//         alert("Đã thêm công việc mới.");
//       } else {
//         alert("Công việc không hợp lệ.");
//       }
//       break;
//     case "2":
//       if (todoListOfDiep.length === 0) {
//         alert("Danh sách công việc rỗng.");
//       } else {
//         let result = "Danh sách công việc:\n";
//         for (let i = 0; i < todoListOfDiep.length; i++) {
//           result += `${i}. ${todoListOfDiep[i]}\n`;
//         }
//         alert(result);
//       }
//       break;
//     case "3":
//       let updateIndex = +prompt("Nhập vị trí muốn cập nhật:");
//       if (
//         !isNaN(updateIndex) &&
//         updateIndex >= 0 &&
//         updateIndex < todoListOfDiep.length
//       ) {
//         let updatedTask = prompt("Nhập nội dung công việc mới:");
//         if (updatedTask) {
//           todoListOfDiep[updateIndex] = updatedTask;
//           alert("Cập nhật thành công.");
//         } else {
//           alert("Công việc mới không hợp lệ.");
//         }
//       } else {
//         alert("Vị trí không hợp lệ.");
//       }
//       break;
//     case "4":
//       let deleteIndex = +prompt("Nhập vị trí muốn xoá:");
//       if (
//         !isNaN(deleteIndex) &&
//         deleteIndex >= 0 &&
//         deleteIndex < todoListOfDiep.length
//       ) {
//         let deleted = todoListOfDiep.splice(deleteIndex, 1);
//         alert(`Đã xoá công việc: ${deleted[0]}`);
//       } else {
//         alert("Vị trí không hợp lệ.");
//       }
//       break;
//     case "5":
//       break;
//     default:
//       alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
//   }
// } while (choice !== "5");
// Tạo mảng có sẵn với các phần tử số
// const mangSo = [2, 5, 7, 4, 1, 8, 6];
// const nhapSo = +prompt("Nhập một số bất kỳ:");
// if (mangSo.includes(nhapSo)) {
//   console.log("Bingo");
// } else {
//   console.log("Chúc bạn may mắn lần sau");
// bài 6
// let array = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
// let input = prompt("nhập các số nguyên cần kiểm tra");
// let numbers = input.split(" ").map(Number);
// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i];
//   let count = 0;
//   for (let j = 0; j < array.length; j++) {
//     if (array[j] === num) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     console.log("số " + num + " không tồn tại trong mảng");
//   } else {
//     console.log("số " + num + " xuất hiện " + count + " lần trong mảng");
//   }
// }
// bài 7
// let mang = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
// for (let i = 0; i < mang.length - 1; i++) {
//   for (let j = 0; j < mang.length - 1 - i; j++) {
//   điều kiện mang.length - 1 -i giảm dần phạm vi tìm phàn tử lớn nhất đã ổn ở cuối sau mỗi vòng
//      i =0 đưa số lớn nhất ra cuối
//      i = 1 đưa ra số lớn thứ 2 ra gần cuối
//      cứ thế đến hết
//      i = n-2 thì đc sắp xếp
//     if (mang[j] > mang[j + 1]) {
//      so sánh sau đó hoán đổi
//      nếu phần tử trc mảng j lớn hơn phần tử sau mảng j+1 đổi chỗ
//      temp biến tạm để đổi giá trị
//      let temp = mang[j];
//      mang[j] = mang[j + 1];
//      mang[j + 1] = temp;
//     }
//   }
// }
// console.log("mảng sau khi sắp xếp tăng dần:", mang);
//bài 8
// let mang = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
// tạo mảng mới đer chứa các phần tử k trùng lặp
// let mangKhongTrung = [];
// duyệt qau từng phần tử trong mảng gốc
// for (let i = 0; i < mang.length; i++) {
// khai báo biến để đánh dấu xem phần tử hiện tại có trùng lặp k
//   let trung = false;
// kiểm tra xem phần tử mangi đã xuất hiện trong mangKhongTrung chưa
// nếu có gán trung = true dừng ktra
// nếu chưa có tiếp tuch ktra đến hết mangKhongTrung
//   for (let j = 0; j < mangKhongTrung.length; j++) {
//     if (mang[i] === mangKhongTrung[j]) {
//       trung = true;
//       break;
//     }
//   }
// nếu trung == fallse là chưa bị trùng.thêm phần tử mảng i vào mangKhongTrung
//   if (!trung) {
//     mangKhongTrung.push(mang[i]);
//   }
// }
// vòng lặp ngoài cho vị trí đang cần sắp xếp
// for (let i = 0; i < mangKhongTrung.length - 1; i++) {
// khai báo biến minIndex là phần tử tại vị trí i là nhỏ nhất
//   let minIndex = i;
// tìm phần tử nhỏ nhất còn lại trong mảng từ i + 1 đến hết
// nếu tìm thấy phần tử nhỏ hơn cập nhập munIndex
//   for (let j = i + 1; j < mangKhongTrung.length; j++) {
//     if (mangKhongTrung[j] < mangKhongTrung[minIndex]) {
//       minIndex = j;
//     }
//   }
// đổi chỗ phần tử nhỏ nhất vào đúng vị trí của nó tại i
// sd biến temp để đổi chỗ
//   let temp = mangKhongTrung[i];
//   mangKhongTrung[i] = mangKhongTrung[minIndex];
//   mangKhongTrung[minIndex] = temp;
// }
// console.log(
//   "mảng sau khi loại bỏ phần tử trùng và sắp xếp tăng dần:",
//   mangKhongTrung
// );
// bài 9
// let mang = [];
// let luaChon = "";

// while (luaChon !== "6") {
//   luaChon = prompt(
//     "=== MENU ===\n" +
//       "1. Nhập vào mảng\n" +
//       "2. Hiển thị mảng\n" +
//       "3. Thêm phần tử\n" +
//       "4. Sửa phần tử\n" +
//       "5. Xóa phần tử\n" +
//       "6. Thoát\n\n" +
//       "Lựa chọn của bạn:"
//   );

//   if (luaChon === "1") {
//     let input = prompt("nhập các số6 (ví dụ: 1,2,3):");
//     mang = input.split(",").map(Number);
//     alert("đã nhập mảng thành công.");
//   } else if (luaChon === "2") {
//     alert("mảng hiện tại: " + mang.join(", "));
//   } else if (luaChon === "3") {
//     let phanTuThem = Number(prompt("nhập phần tử muốn thêm:"));
//     mang.push(phanTuThem);
//     alert("đã thêm phần tử");
//   } else if (luaChon === "4") {
//     let viTriSua = Number(prompt("nhập vị trí muốn sửa (bắt đầu từ 0):"));
//     if (viTriSua >= 0 && viTriSua < mang.length) {
//       let giaTriMoi = Number(prompt("nhập giá trị mới:"));
//       mang[viTriSua] = giaTriMoi;
//       alert("đã sửa phần tử");
//     } else {
//       alert("vị trí không hợp lệ");
//     }
//   } else if (luaChon === "5") {
//     let viTriXoa = Number(prompt("Nhập vị trí muốn xóa (bắt đầu từ 0):"));
//     if (viTriXoa >= 0 && viTriXoa < mang.length) {
//       mang.splice(viTriXoa, 1);
//       alert(" đã xóa phần tử");
//     } else {
//       alert(" vị trí không hợp lệ");
//     }
//   } else if (luaChon === "6") {
//     alert("chương trình kết thúc");
//   } else {
//     alert(" lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 6");
//   }
// }
/*let array = [];
while (true) {
  let choice = prompt(`
        ================== MENU ===================
        1. Nhập số phần tử và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố và tính tổng
        6. Nhập vào một số và thống kê số lần xuất hiện
        7. Thêm một phần tử vào vị trí chỉ định
        8. Thoát
        =========================================
    `);
  switch (choice) {
    case "1":
      let n = parseInt(prompt("Nhập số phần tử: "));
      array = [];
      for (let i = 0; i < n; i++) {
        let value = parseInt(prompt(`Phần tử thứ ${i + 1}: `));
        array.push(value);
      }
      break;
    case "2":
      alert("Các phần tử đang quản lý: " + array.join(", "));
      break;
    case "3":
      let evenNums = array.filter((x) => x % 2 === 0);
      let sumEven = evenNums.reduce((a, b) => a + b, 0);
      alert(
        "Các phần tử chẵn: " +
          evenNums.join(", ") +
          "\nTổng các phần tử chẵn: " +
          sumEven
      );
      break;
    case "4":
      if (array.length === 0) {
        alert("Mảng rỗng.");
        break;
      }
      let max = Math.max(...array);
      let min = Math.min(...array);
      alert("Giá trị lớn nhất: " + max + "\nGiá trị nhỏ nhất: " + min);
      break;
    case "5":
      let primes = [];
      let sumPrimes = 0;
      for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num < 2) continue;
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(num); j++) {
          if (num % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primes.push(num);
          sumPrimes += num;
        }
      }
      alert(
        "Các số nguyên tố: " +
          primes.join(", ") +
          "\nTổng các số nguyên tố: " +
          sumPrimes
      );
      break;
    case "6":
      let x = parseInt(prompt("Nhập số cần thống kê: "));
      let count = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === x) count++;
      }
      alert(`Số ${x} xuất hiện ${count} lần.`);
      break;
    case "7":
      let valueToAdd = parseInt(prompt("Nhập giá trị cần thêm: "));
      let position = parseInt(prompt("Nhập vị trí cần chèn (0-based): "));
      if (position >= 0 && position <= array.length) {
        array.splice(position, 0, valueToAdd);
        alert("Mảng sau khi thêm: " + array.join(", "));
      } else {
        alert("Vị trí không hợp lệ.");
      }
      break;
    case "8":
      alert("Thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
      break;
  }
  if (choice === "8") break;
}
  */
//  bài 11
// let array = [];
// for (let i = 0; i < 10; i++) {
//   let value = +prompt(`Nhập phần tử thứ ${i + 1}: `);
//   array.push(value);
// }
// tạo biến count để lưu số phần tử trong mảng có giá trị lớn hơn hoặc bằng 10 lúc đầu count là 0
// let count = 0;
// vòng lặp này duyệt qua tất các phần tử trong mảng array
// for (let i = 0; i < array.length; i++) {
// nếu array >= 10 ktra phần tử tại chỉ số i có lớn hon hoặc bằng 10 k
// nếu có là phần tử thoả mãn đkien thuc hiện lệnh
//   if (array[i] >= 10) {
// tăng biến count lên 1
//     count++;
//   }
// }
// console.log("Số phần tử lớn hơn hoặc bằng 10 là: " + count);
//bài 12
// let array = [];
// while (array.length < 10) {
//   let value = +prompt(`nhập phần tử thứ ${array.length + 1}:`);
// ktra xem phần tử đã tồn tại chưa
//   if (array.includes(value)) {
//     alert("đã tồn tại,vui lòng nhập số khác");
//   } else {
// nếu chưa tồn tại dùng push để thêm
//     array.push(value);
//   }
// }
// biến max bắt đầu bằng phần tử đầu tiên array 0
// let max = array[0];
// biến index lưu chỉ số phần tử lớn nhất
// let index = 0;
// vòng lặp for so sánh với từng phần tử max
// for (let i = 1; i < array.length; i++) {
// nếu tìm đc phần tử lớn hơn cập nhập max và index
//   if (array[i] > max) {
//     max = array[i];
//     index = i;
//   }
// }
// console.log("số lớn nhất: " + max + " vị trí: " + index);
// bài 15
// let n = +prompt("nhập số lượng phần tử của mảng:");
// if (n < 0) {
//   alert("số lượng phần tử không được nhỏ hơn 0");
// } else if (n === 0) {
//   alert("mảng không có phần tử nào");
// } else {
// tạo mảng rỗng
//   let array = [];
// vòng lặp để nhập đúng n phần tử
//   for (let i = 0; i < n; i++) {
//     let value = +prompt(`nhập phần tử thứ ${i + 1}:`);
//     array.push(value);
//   }
// tìm phần tử lớn nhất
// gán max bằng phần tử đầu tiên
//   let max = array[0];
// duyêt tùng ophaanf tử thứ 2 đến hết
//   for (let i = 1; i < array.length; i++) {
// nếu tìm thấy phần tử lớn hơn max => cập nhật max
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
// tìm phần tử lớn thứ 2
// gán biến secondMax bằng null
//   let secondMax = null;
// dùng vòng lặp duyệt mảng nếu phần tử hiện tại lớn hơn sôcndMax => cập nhật
// nếu tất cả bằng nhau thì k thay đổi k tòn tại số lớn t2
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < max) {
//       if (secondMax === null || array[i] > secondMax) {
//         secondMax = array[i];
//       }
//     }
//   }
// nếu k tìm đc seconfMax k tồn tại và ngược lại
//   if (secondMax === null) {
//     console.log("k tồn tại số lớn thứ 2");
//   6} else {
//     console.log("số lớn thứ hai là: " + secondMax);
//   }
// }
// bài 13
// let n = +prompt("nhập số lượng phần tử của mảng:");
// ktra nếu n là số âm báo lỗi
// if (n < 0) {
//   alert("số lượng phần tử không hợp lệ");
// nếu nhập 0nlaf k nhập phần tử nào
// } else if (n === 0) {
//   alert("mảng không có phần tử");
// } else {
// tạo mảng rỗng để lưu người dùng nhập vào
//   let array = [];
//   for (let i = 0; i < n; i++) {
//     let value = +prompt(`nhập phần tử thứ ${i + 1}:`);
//     array.push(value);
//   }
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
// ktra đkien. ktra xem có phải kà số nguyên hay k
// đúng => - 2,5,0
// sai -1.1,3.14
// array[i]<0 => ktra phần tử là số am
//     if (Number.isInteger(array[i]) && array[i] < 0) {
// chỉ đếm số nguywwn và số âm
//       count++;
//     }
//   }
//   console.log("số nguyên âm trong mảng là: " + count);
// }
