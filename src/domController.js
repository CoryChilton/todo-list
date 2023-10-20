import { logicController } from "./logicController";

export const domController = (function () {
  const todosUl = document.getElementById('todos');
  const projectsUl = document.getElementById('projects');
  const addTodoBtn = document.getElementById('add-todo');
  const addProjectBtn = document.getElementById('add-project');
  addTodoBtn.addEventListener('click', addTodoBtnClick);
  addProjectBtn.addEventListener('click', addProjectBtnClick);

  function addTodoBtnClick(){
    logicController.addTodo('todo title', 'desc', 'due', 'priority', 'notes');
    render();
  }

  function addProjectBtnClick() {
    logicController.addProject('project-title');
    render();
  }

  function render(){
    projectsUl.textContent = "";
    todosUl.textContent = "";

    const todos = logicController.getTodos();
    const projects = logicController.getProjects();
    todos.forEach((todo, idx) => {
      const todoLi = document.createElement('li');
      todoLi.textContent = todo.title;
      todoLi.setAttribute('data-index', idx);
      todosUl.appendChild(todoLi);
    });

    projects.forEach((project, idx) => {
      const projectLi = document.createElement('li');
      projectLi.textContent = project.title;
      projectLi.setAttribute('data-index', idx);
      projectsUl.appendChild(projectLi);
    });
  }

  render();
})();