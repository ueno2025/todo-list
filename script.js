
const input = document.querySelector(".todo-input");
const input_button = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const delete_buttons = document.querySelectorAll(".delete-btn");

// 入力処理
function addTodo() {
    const input_text = input.value;
    if (input_text === "") return;

    const li = document.createElement("li");
    li.classList.add('todo-li');
    li.textContent = input_text;

    const delete_button = document.createElement("button");
    delete_button.innerHTML = '<img src="trash-2.svg" alt="削除">';
    delete_button.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(delete_button);
    
    todoList.appendChild(li);

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