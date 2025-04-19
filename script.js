const inputField = document.querySelector(".input-filed");
const addBtn = document.querySelector(".addBtn");
const clearBtn = document.querySelector(".clearBtn");
const todoListContainer = document.querySelector(".todo-container");

let todoList = [];

addBtn.addEventListener("click", function () {

    const inputValue = inputField.value;

    if (inputValue === "") {
        alert("Please enter a todo text.");
        return;
    }

    todoList.unshift(inputValue);
    inputField.value = ""; // Clear the input field

    renderTodoList();

})


function renderTodoList(){
    let generatedHTML = "";
    for( let i = 0; i < todoList.length; i++){
        generatedHTML += ` 
        <div class="item-container">
                <div class="todo-icon">
                    <i class="fa-regular fa-circle"></i>
                </div>
                <div class="todo-item">
                    <div class="todo-text"></i>${todoList[i]}</div>
                </div>
                <div>
                    <button class="todo-editBtn"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="todo-deleteBtn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        
        `        
    }


    todoListContainer.innerHTML = generatedHTML;

}



// Personal/ Professional borderBottom
function personal(){
    let professional = document.querySelector(".professional");
    let personal = document.querySelector(".personal");
    personal.style.borderBottom = "2px solid dodgerblue";
    professional.style.borderBottom = "none";
}
function professional(){
    let personal = document.querySelector(".personal");
    let professional = document.querySelector(".professional");
    professional.style.borderBottom = "2px solid dodgerblue";
    personal.style.borderBottom = "none";
}



renderTodoList();
