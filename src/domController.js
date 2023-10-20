import { logicController } from "./logicController";

export const domController = (function () {
  const todosDiv = document.getElementById('todos');
  const projectsDiv = document.getElementById('projects');
  const addTodoBtn = document.getElementById('add-todo');
  const addProjectBtn = document.getElementById('add-project');
  addTodoBtn.addEventListener('click', addTodoBtnClick);
  addProjectBtn.addEventListener('click', addProjectBtnClick);

  function addTodoBtnClick(){
    logicController.addTodo('title', 'desc', 'due', 'priority', 'notes');
    render();
  }

  function addProjectBtnClick() {
    logicController.addProject('title');
    render();
  }

  function render(){
    const todos = logicController.getTodos();
    const projects = logicController.getProjects();
    console.log({todos, projects});
  }

  render();
})();