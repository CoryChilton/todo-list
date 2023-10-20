import { logicController } from "./logicController";

export const domController = (function () {
  const todosDiv = document.getElementById('todos');
  const createTodoBtn = document.getElementById('create-todo');
  createTodoBtn.addEventListener('click', createTodoBtnClick);

  function createTodoBtnClick(){
    const todo = logicController.createTodo('title', 'desc', 'due', 'priority', 'notes');
    console.log(todo);
  }
})();