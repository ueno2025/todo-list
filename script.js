
const input = document.querySelector(".todo-input");
const input_button = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const delete_buttons = document.querySelectorAll(".delete-btn");


// ローカルストレージにデータ保存
function saveData() {
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(li => {
        todos.push(li.innerText);
    })
    localStorage.setItem("todoList", JSON.stringify(todos));
}


// ロード時のデータ読み込み
window.addEventListener("load", () => {
    const savedTodos = JSON.parse(localStorage.getItem("todoList"));

    if (savedTodos && savedTodos.length > 0) {
        savedTodos.forEach(todoText => {
            renderTodo(todoText);
        });
    } else {
        const defaultTodos = ["todo-1", "todo-2", "todo-3"];
        defaultTodos.forEach(todoText => {
            renderTodo(todoText);
        });
        saveData();
    }
});

function renderTodo(text) {
    const li = document.createElement("li");
    li.classList.add('todo-li');
    li.textContent = text;

    // 削除ボタン作成
    const delete_button = document.createElement("button");
    delete_button.innerHTML = '<img src="trash-2.svg" alt="削除">';
    delete_button.addEventListener("click", () => {
        li.remove();
        saveData();
    });
    li.appendChild(delete_button);
    
    todoList.appendChild(li);
}


// 入力処理
function addTodo() {
    const input_text = input.value;
    if (input_text === "") return;

    renderTodo(input_text);
    saveData();

    input.value = "";
}


input_button.addEventListener("click", addTodo);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});


// 削除処理
delete_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentElement.remove();
    });
});