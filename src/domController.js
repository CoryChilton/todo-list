import { logicController } from "./logicController";

export const domController = (function () {
  const todosUl = document.getElementById('todos');
  const projectsUl = document.getElementById('projects');
  const addTodoBtn = document.getElementById('add-todo');
  const addProjectBtn = document.getElementById('add-project');
  const projectModal = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('close-project-modal');
  const confirmModalBtn = document.getElementById('confirm-project');
  const newProjectName = document.getElementById('project-name');
  const projectForm = document.querySelector('#project-section form');
  addTodoBtn.addEventListener('click', clickAddTodoBtn);
  addProjectBtn.addEventListener('click', clickAddProjectBtn);
  closeModalBtn.addEventListener('click', clickCloseModalBtn);
  confirmModalBtn.addEventListener('click', clickConfirmModalBtn);

  function clickAddTodoBtn(){
    logicController.addTodo('todo title', 'desc', 'due', 'priority', 'notes');
    render();
  }

  function clickAddProjectBtn() {
    projectModal.showModal();
  }

  function clickCloseModalBtn() {
    projectModal.close();
  }

  function clickConfirmModalBtn() {
    logicController.addProject(newProjectName.value);
    projectForm.reset();
    render();
  }

  function render(){
    console.log('render');
    projectsUl.textContent = "";
    todosUl.textContent = "";

    
    const projects = logicController.getProjects();
    const curProject = logicController.getCurrentProject();
    const todos = logicController.getTodos();
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
      projectLi.addEventListener('click', clickProject);
      if(project === curProject) {
        projectLi.classList.add('current-project');
      }
      projectsUl.appendChild(projectLi);
    });
  }

  function clickProject(e) {
    logicController.setCurrentProject(e.target.dataset.index);
    render();
  }

  render();
})();