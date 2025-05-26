// // let employeeList = [
// //   {
// //     id: 1,
// //     name: "Ngọc Trinh",
// //     position: "Người mẫu",
// //     salary: 5000,
// //   },
// //   {
// //     id: 2,
// //     name: "Hồ Ngọc Hà",
// //     position: "Ca sĩ/Người mẫu",
// //     salary: 3000,
// //   },
// //   {
// //     id: 3,
// //     name: "Hiền Hồ",
// //     position: "Ca sĩ",
// //     salary: 20000,
// //   },
// // ];
// // let menu = `
// // -------------- MENU --------------
// // 1. Thêm nhân viên mới.
// // 2. Xóa nhân viên theo id.
// // - Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
// // - Không tìm thấy nhân viên có id thì hiển thị thông báo.
// // 3. Cập nhật mức lương của nhân viên theo id
// // 4. Tìm kiếm nhân viên theo tên.
// // 5. Thoát
// // `;
// // let loop = true;
// // while (loop) {
// //   let userInput = +prompt(menu);
// //   switch (userInput) {
// //     case 1:
// //       let name = prompt("Mời bạn nhập tên của nhân viên mới");
// //       let position = prompt("Mời bạn nhập chức vụ của nv mới");
// //       let salary = prompt("Mời bạn nhập mức lượng của nv mới");
// //       let id = Math.random(); // [0 --- 0.99999999999999]
// //       let newEmployee = {
// //         id: id,
// //         name: name,
// //         position: position,
// //         salary: salary,
// //       };
// //       employeeList.push(newEmployee);
// //       showEmployeeInfo();
// //       break;
// //     case 2:
// //       let deleteId = +prompt("Mời bạn nhập vào id của nv muốn xoá");
// //       let findIndex = findById(deleteId); // -1, index

// //       // findById(deleteId) // --> vị trí index của nv
// //       if (findIndex === -1) {
// //         console.log("Không có nhân viên với id mà bạn vừa nhập");
// //       } else {
// //         // B3: Tiến hành hiển thị ô confirm (Bạn có muốn xoá hay không???)
// //         let isConfirm = confirm("Bạn có muốn xoá nhân viên này không???"); // true
// //         // B4: Nếu có --> Tiến hành xoá
// //         if (isConfirm) {
// //           // Tiến hành xoá
// //           employeeList.splice(findIndex - 1, 1);
// //           showEmployeeInfo();
// //         }
// //         // B5: Nếu không --> Không xoá
// //         // B6: Hiển thị mảng nhân viên (Để quan sát sự thay đổi)
// //       }

// //       break;
// //     case 3:
// //       // Cập nhật mức lương của nhân viên theo id
// //       // B1: Cho người dùng nhập vào id của nhân viên muốn thay đổi
// //       // mức lương
// //       let updateId = +prompt("mời bạn nhập vào id của nv muốn thay đổi lương");
// //       // B2: Tìm kiếm nhân viên theo id
// //       // findById(updateId)
// //       let updateIndex = findById(updateId);
// //       // B3: Tiến hành cập nhật
// //       if (updateIndex === -1) {
// //         console.log("Không tìm thấy nhân viên với id như trên");
// //       } else {
// //         let newSalary = prompt("Mời bạn nhập vào mức lương mới của nv trên");
// //         employeeList[updateIndex - 1].salary = newSalary;
// //         showEmployeeInfo();
// //       }
// //       break;
// //     case 4:
// //       // Tìm kiếm nhân viên theo tên
// //       break;
// //     case 5:
// //       // Thoát
// //       console.log("Thanks for using the app !!!");
// //       loop = false;
// //       break;
// //   }
// // }

// // // Output:
// // // Thực hiện các tính năng tuỳ thuộc vào sự lựa chọn
// // // của người dùng

// // function showEmployeeInfo() {
// //   for (let i = 0; i < employeeList.length; i = i + 1) {
// //     console.log(`${i + 1}.------`); // {id, name...}, {id, name ...}
// //     console.log(`id: ${employeeList[i].id}`);
// //     console.log(`name: ${employeeList[i].name}`);
// //     console.log(`salary: ${employeeList[i].salary}`);
// //     console.log(`position: ${employeeList[i].position}`);
// //   }
// // }

// // function findById(id) {
// //   let findIndex = -1;
// //   for (let i = 0; i < employeeList.length; i = i + 1) {
// //     if (employeeList[i].id === id) {
// //       findIndex = i;
// //       break;
// //     }
// //   }
// //   return findIndex;
// // }
// // document.getElementById("demo-id");
// // let div = document.getElementById("div");
// // console.log(div);
// // let listItems = document.getElementsByClassName("list-item");
// // console.log(listItems);
// // console.log(listItems[0]);
// // let list = [
// //   {
// //     id: 1,
// //     name: "Vượng",
// //   },
// //   {
// //     id: 2,
// //     name: "Vượng1",
// //   },
// //   {
// //     id: 3,
// //     name: "Vượng2",
// //   },
// // ];
// // let ul = document.getElementById("container");
// // let result = "";
// // for (let i = 0; i < list.length; i++) {
// //   list[i];
// //   let li = `<table>${list[i].name}</table>`;
// //   result = result + li;
// // }
// // ul.innerHTML = result;
// // let studentList = [
// //   {
// //     id: 1,
// //     name: "John",
// //     age: 18,
// //     address: "New York ",
// //   },
// //   {
// //     id: 2,
// //     name: "Mike",
// //     age: 22,
// //     address: "Canada ",
// //   },
// //   {
// //     id: 3,
// //     name: "Linda",
// //     age: 19,
// //     address: "Cali ",
// //   },
// //   {
// //     id: 4,
// //     name: "Peter",
// //     age: 25,
// //     address: "London ",
// //   },
// //   {
// //     id: 5,
// //     name: "Tony",
// //     age: 17,
// //     address: "New York ",
// //   },
// // ];
// // let table = document.getElementById("main-table");
// // for (let index in studentList) {
// //   let tr = `
// //   <tr>
// //   <td>${+index + 1}</td>
// //   <td>${studentList[index].name}</td>
// //   <td>${studentList[index].age}</td>
// //   <td>${studentList[index].address}</td>
// //   </tr>
// //   `;
// //   table.innerHTML = table.innerHTML + tr;
// // }
// // let todoList = [
// //   {
// //     id: 1,
// //     content: "Nhậu",
// //     status: false,
// //   },
// //   {
// //     id: 2,
// //     content: "Ăn phở",
// //     status: true,
// //   },
// //   {
// //     id: 3,
// //     content: "Massage",
// //     status: false,
// //   },
// //   {
// //     id: 4,
// //     content: "Cơm rang",
// //     status: true,
// //   },
// // ];

// // let ul = document.getElementById("myUL");
// // for (let index in todoList) {
// //   let li;
// //   if (todoList[index].status) {
// //     li = `
// //  <li class="checked">${todoList[index].content}<span class="close">X</span></li>
// //   `;
// //   } else {
// //     li = `
// //  <li >${todoList[index].content}<span class="close">X</span></li>
// //   `;
// //   }
// //   ul.innerHTML = ul.innerHTML + li;
// // }
// let h1 = document.getElementById("demo-id");
// // console.log(h1);
// // console.log(h1.style);
// // h1.style.backgroundColor = "red";
// // h1.style.border = "10px solid black";
// console.log(h1.classList);
// h1.classList.add("hv-dz");
// h1.classList.remove("cl-1");
// h1.classList.contains("dsdasdas");
// h1.classList.add("circle");
// console.log(h1.parentElement.parentElement.children[0].children[3]);
// let a = document.getElementById("a-tag");
// console.log(a);
// // getAttribute
// console.log(a.getAttribute("href"));
// a.setAttribute("href", "http:www.youtube.com");
// let img = document.createElement("img");
// let li = document.createElement("li");
// console.log(img);
// console.log(li);
// let body = document.getElementById("body");
// body.appendChild(img);
// a.remove;
// let btn = document.getElementById("demo-event");
// let container = document.getElementById("container");
// btn.onclick = function () {
//   if (container.innerHTML === "") {
//     let img = `
//   <img src="https://kenh14cdn.com/thumb_w/640/203336854389633024/2025/5/21/avatar1747830477304-1747830477525432105419.png"/>
//   `;
//     container.innerHTML = img;
//   } else {
//     container.innerHTML = "";
//   }
//   ("");
// };
let todoListDB = [
  {
    id: 1,
    content: "Hit the gym",
    status: false,
  },
  {
    id: 2,
    content: "Pay bills",
    status: true,
  },
  {
    id: 3,
    content: "Meet George",
    status: false,
  },
  {
    id: 4,
    content: "Buy eggs",
    status: false,
  },
];
let ul = document.getElementById("myUL");
render();

// thêm mới todo
let addBtn = document.getElementById("addBtn");
let input = document.getElementById("myInput");
addBtn.onclick = function () {
  let content = input.value;
  if (content !== "") {
    let todoData = {
      id: Math.random(),
      content: content,
      status: false,
    };
    todoListDB.push(todoData);
    ul.innerHTML = "";
    render();
    input.value = "";
  }
  return;
};
// render
function render() {
  for (let index in todoListDB) {
    let li = ` 
  <li id="${todoListDB[index].id}"  class=" list-item checked" >
  ${todoListDB[index].content}
  </li> `;
    if (todoListDB[index].status) {
      li = `  <li id="${todoListDB[index].id}"  class=" list-item checked" >
  ${todoListDB[index].content}
  <span class="close">×</span>

   `;
    } else {
      li = `
      <li id="${todoListDB[index].id}"  class=" list-item" >
       ${todoListDB[index].content}
       <span class="close">×</span>
      </li>`;
    }
    ul.innerHTML = ul.innerHTML + li;
  }
  // update
  let liCollection = document.getElementsByClassName("list-item");
  for (let i = 0; i < liCollection.length; i = i + 1) {
    liCollection[i].onclick = function () {
      let id = +liCollection[i].getAttribute("id");
      let updateIndex = -1;
      for (let j = 0; j < todoListDB.length; j++) {
        if (todoListDB[j].id === id) {
          updateIndex = j;
          break;
        }
      }
      todoListDB[updateIndex].status = !todoListDB[updateIndex].status;
      ul.innerHTML = "";
      render();
    };
  }
  // xóa
  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function (event) {
      event.stopPropagation();
      let id = +close[i].parentElement.getAttribute("id");
      let deleteIndex = -1;
      for (let j = 0; j < todoListDB.length; j++) {
        if (todoListDB[j].id === id) {
          deleteIndex = j;
          break;
        }
      }
      todoListDB.splice(deleteIndex, 1);
      ul.innerHTML = "";
      render();
    };
  }
}
