const todoList = [{
    name: 'make dinner',
    dueDate: '2025-12-01'
}, {
    name: 'wash dishes',
    dueDate: '2025-12-01'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for(let i=0; i<todoList.length;i++) {
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;//Destructuring
        const html = `
        <div>
        ${name} </div>
        <div>
        ${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " 
        class="delete-button" >Delete</button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-div').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-search-bar');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    dateInputElement.value = '';
    inputElement.value = '';
    
    renderTodoList();
}

function OnKeyDown(event) {
    if (event.key == 'Enter'){
        addTodo();
    }
}
