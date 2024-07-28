// Tạo dữ liệu cho ứng dụng
const todoList = [
    { id: 1, title: "Đi chơi", status: false },
    { id: 2, title: "Xem phim", status: false },
    { id: 3, title: "Đá bóng", status: true },
    { id: 4, title: "Làm bài tập", status: false },
    { id: 5, title: "Đi du lịch", status: true }
];

// Hiển thị danh sách todo ra ngoài giao diện
let list_group = document.querySelector(".list-group");

const renderTodo = (todoList) => {
    if (todoList.length === 0) {
        list_group.innerHTML = "<span>Không có công việc nào trong danh sách!</span>";
        return;
    }

    let html = "";
    todoList.forEach(element => {
        html += `
            <li class="list-group-item d-flex align-items-center">
                <input onclick="checkboxTodo(${element.id})" type="checkbox" class="mr-2" ${element.status ? "checked" : ""}>
                <span class="${element.status ? "active" : ""}">${element.title}</span>
                <button class="btn btn-warning btn-sm ml-auto mr-2" onclick="editTodo(${element.id})">Edit</button>
                <button onclick= "deleteTodo(${element.id})" class="btn btn-danger btn-sm">Delete</button>
            </li>
        `;
    });

    list_group.innerHTML = html;
};

renderTodo(todoList);
//tạo id ngẫu nhiên
const createId = () =>{
    if (todoList.length ==0) {
        return 1;
    }
    return Math.max(...todoList.map(element => element.id)) + 1;
}
//thêm công việc

const inputTodo = document.getElementById("input-todo")
const btnAdd = document.getElementById("btn-add")

btnAdd.addEventListener("click",() =>{
    const titleEl = inputTodo.value.trim();
    if(titleEl.length == 0 ){
        alert("Tên công việc không để trống!")
        return;
    }

    const newTodo = {
        id:createId(),
        title :titleEl,
        status :false
    };

    todoList.push(newTodo);
    renderTodo(todoList)
    inputTodo.value = "";
})
// xóa công việc
const deleteTodo = id =>{
    const isDelete = confirm("Bạn có chắc chắn muốn xóa?")
    if (!isDelete){return} ;

    const index = todoList.findIndex(element => element.id ==id);
    todoList.splice(index,1);
    renderTodo(todoList)
}

// chỉnh sửa công việc
const editTodo = id =>{
    const index = todoList.findIndex(e => e.id == id);
    const currentTodo = todoList[index];
    let newTitle = window.prompt("Cập nhật tiêu đề công việc!", currentTodo.title);
    if (newTitle === null || newTitle.trim().length === 0) {
        // alert("Vui lòng nhập tên hợp lệ!")
        return; 
    }

    todoList[index].title = newTitle;
    renderTodo(todoList);
    
}

// check box

const checkboxTodo = id =>{
    const index = todoList.findIndex(e => e.id == id);

        todoList[index].status = !todoList[index].status;   
    renderTodo(todoList)
}
renderTodo(todoList)
