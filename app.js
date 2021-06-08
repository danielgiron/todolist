//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);

//functions
function addTodo (event) { 
    //prevent from submitting
    event.preventDefault();
    console.log("HELLO");

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    
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
}
