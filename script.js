
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click", () => {
    const input_text = input.value;
    if (input_text === "") return;

    console.log(input.value);
    
    const li = document.createElement("li");
    li.textContent = input_text;
    todoList.appendChild(li);
    
    input.value = "";
});