// let phoneList = [
//   {
//     id: 1,
//     name: "Vuong",
//     phone: "0988888888",
//   },
//   {
//     id: 2,
//     name: "Vuong12",
//     phone: "0988888887",
//   },
//   {
//     id: 3,
//     name: "Vuong123",
//     phone: "0988888889",
//   },
// ];
// while (true) {
//   let userInput = prompt("C/R/U/D");
//   if (userInput === "C") {
//     let name = prompt("Nhap ten");
//     let phone = prompt(`Please input new phone for ${name}`);
//     let contact = {
//       id: Math.random(),
//       name: name,
//       phone: phone,
//     };
//     phoneList.push(contact);
//     dispalyCantact();
//   } else if (userInput === "R") {
//     dispalyCantact();
//   } else if (userInput === "U") {
//     let name = prompt("Please input contact name to update");
//     let index = phoneList.findIndex(function (el, i) {
//       return el.name === name;
//     });
//     if (index === -1) {
//       console.log("Contact not found");
//     } else {
//       let phone = prompt(`Please input new phone for ${name}`);
//       phoneList[index].phone = phone;
//       dispalyCantact();
//     }
//   } else if (userInput === "D") {
//     let name = prompt("Please input contact name to delete");
//     let index = phoneList.findIndex(function (el, i) {
//       return el.name === name;
//     });
//     if (index === -1) {
//       console.log("Contact not found");
//     } else {
//       phoneList.splice(index, 1);
//       dispalyCantact();
//     }
//   } else if (userInput === "E") {
//     // console.log("Thanks ");
//     break;
//   } else {
//     console.log("Invalid");
//   }
// }
// function dispalyCantact() {
//   console.log("Your phone list:");
//   for (let index in phoneList) {
//     console.log();
//     console.log("Name:", phoneList[index].name);
//     console.log(("Phone:", phoneList[index].phone));
//     console.log("---------------");
//   }
// }
//bài 8
// let books = [];

// function menu() {
//   let choice;
//   do {
//     choice = prompt(
//       "=== Quản Lý Sách Thư Viện ===\n" +
//         "1. Thêm sách mới\n" +
//         "2. Hiển thị danh sách sách\n" +
//         "3. Tìm kiếm sách theo tiêu đề\n" +
//         "4. Cập nhật trạng thái mượn/trả sách\n" +
//         "5. Xóa sách theo ID\n" +
//         "6. Sắp xếp sách theo giá tăng dần\n" +
//         "0. Thoát\n\n"
//     );
//     switch (choice) {
//       case "1":
//         addBook();
//         break;
//       case "2":
//         showBooks();
//         break;
//       case "3":
//         searchBook();
//         break;
//       case "4":
//         updateStatus();
//         break;
//       case "5":
//         deleteBook();
//         break;
//       case "6":
//         sortBooks();
//         break;
//       case "0":
//         alert("Thoát chương trình.");
//         break;
//       default:
//         alert("Lựa chọn không hợp lệ!");
//     }
//   } while (choice !== "0");
// }
// function addBook() {
//   let id = parseInt(prompt("Nhập ID sách:"));
//   if (books.some((book) => book.id === id)) {
//     alert("ID đã tồn tại!");
//     return;
//   }
//   let title = prompt("Nhập tên sách:");
//   let author = prompt("Nhập tác giả:");
//   let year = parseInt(prompt("Nhập năm xuất bản:"));
//   let price = parseFloat(prompt("Nhập giá sách:"));
//   books.push({ id, title, author, year, price, isAvailable: true });
//   alert("Đã thêm sách thành công!");
// }
// function showBooks() {
//   if (books.length === 0) {
//     alert("Danh sách sách trống.");
//     return;
//   }
//   let result = "=== Danh sách sách ===\n";
//   books.forEach((book) => {
//     result += `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${
//       book.author
//     }, Năm: ${book.year}, Giá: ${book.price}, Trạng thái: ${
//       book.isAvailable ? "Có sẵn" : "Đang mượn"
//     }\n`;
//   });
//   alert(result);
// }
// function searchBook() {
//   let keyword = prompt("Nhập tiêu đề cần tìm:").toLowerCase();
//   let results = books.filter((book) =>
//     book.title.toLowerCase().includes(keyword)
//   );
//   if (results.length === 0) {
//     alert("Không tìm thấy sách.");
//     return;
//   }
//   let output = "=== Kết quả tìm kiếm ===\n";
//   results.forEach((book) => {
//     output += `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${
//       book.author
//     }, Năm: ${book.year}, Giá: ${book.price}, Trạng thái: ${
//       book.isAvailable ? "Có sẵn" : "Đang mượn"
//     }\n`;
//   });
//   alert(output);
// }
// function updateStatus() {
//   let id = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái:"));
//   let book = books.find((book) => book.id === id);
//   if (!book) {
//     alert("Không tìm thấy sách!");
//     return;
//   }
//   book.isAvailable = !book.isAvailable;
//   alert(
//     `Đã cập nhật trạng thái sách: ${book.isAvailable ? "Có sẵn" : "Đang mượn"}`
//   );
// }
// function deleteBook() {
//   let id = parseInt(prompt("Nhập ID sách cần xóa:"));
//   let index = books.findIndex((book) => book.id === id);
//   if (index === -1) {
//     alert("Không tìm thấy sách!");
//     return;
//   }
//   books.splice(index, 1);
//   alert("Đã xóa sách thành công!");
// }
// function sortBooks() {
//   books.sort((a, b) => a.price - b.price);
//   alert("Đã sắp xếp sách theo giá tăng dần.");
//   showBooks();
// }

// menu();
