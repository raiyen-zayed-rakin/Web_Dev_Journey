const todoList = [];
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  for(let i = 0; i<todoList.length; i++){
    const todo = todoList[i];
    const html = `
      <p>
        ${todo} 
        <button onclick="
          todoList.splice(${i},1);
          renderTodoList();
        ">Delete</button>
      </p>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo(){
  const inputELement = document.querySelector('.js-name-input');
  const name = inputELement.value;

  todoList.push(name);
  console.log(todoList);
  inputELement.value = '';

  renderTodoList();
}

