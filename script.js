
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");

button.addEventListener("click", () => {
    console.log(input.value);
    input.value = "";
});