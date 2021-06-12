//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const filterAll = document.querySelector('.filterAll');
const filterCom = document.querySelector('.filterCom');
const filterUncom = document.querySelector('.filterUncom');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', buttonCheck);
filterAll.addEventListener('click', filterA);
filterCom.addEventListener('click', filterB);
filterUncom.addEventListener('click', filterC);
 
//functions
function addTodo (event) { 
    //prevent from submitting and refreshing
    event.preventDefault();

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear input value
    todoInput.value = '';
}

function buttonCheck(e){
    const item = e.target;

    //if target clicked is delete button
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;

        //falling animation
        todo.classList.toggle("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    //if target clicked is check mark button
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterA (event) {
    filterAll.classList.add('isActive');
    filterCom.classList.remove('isActive');
    filterUncom.classList.remove('isActive');

    const todos = todoList.childNodes;

    // console.log(todos);
    todos.forEach(function(todo)
    {
        console.log(todo);
        todo.style.display = "flex";
    });
}


function filterB (event) {
    filterAll.classList.remove('isActive');
    filterCom.classList.add('isActive');
    filterUncom.classList.remove('isActive');

    const todos = todoList.childNodes;

    todos.forEach(function(todo){
        if (todo.classList.contains("completed")) 
        {
            todo.style.display = "flex";
        }

        else {todo.style.display = "none";}
    })
}

function filterC (event) {
    filterAll.classList.remove('isActive');
    filterCom.classList.remove('isActive');
    filterUncom.classList.add('isActive');

    const todos = todoList.childNodes;

    todos.forEach(function(todo){
        if (todo.classList.contains("completed")) 
        {
            todo.style.display = "none";
        }

        else {todo.style.display = "flex";}
    })
}
