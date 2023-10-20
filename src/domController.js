import { logicController } from "./logicController";

export const domController = (function () {
  const todosDiv = document.getElementById('todos');
  const createTodoBtn = document.getElementById('add-todo');
  createTodoBtn.addEventListener('click', addTodoBtnClick);

  function addTodoBtnClick(){
    logicController.addTodo('title', 'desc', 'due', 'priority', 'notes');
    render();
  }

  function render(){
    const todos = logicController.getTodos();
    console.log(todos);
  }

  render();
})();