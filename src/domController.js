import { logicController } from "./logicController";

export const domController = (function () {
  const todosUl = document.getElementById('todos');
  const projectsUl = document.getElementById('projects');
  const addTodoBtn = document.getElementById('add-todo');
  const addProjectBtn = document.getElementById('add-project');
  const projectModal = document.getElementById('project-modal');
  const closeProjectModalBtn = document.getElementById('close-project-modal');
  const confirmProjectModalBtn = document.getElementById('confirm-project');
  const newProjectNameInput = document.getElementById('project-name');
  const projectForm = document.querySelector('#project-modal form');
  const todoModal = document.getElementById('todo-modal');
  const todoForm = document.querySelector('#todo-modal form')
  const closeTodoModalBtn = document.getElementById('close-todo-modal');
  const confirmTodoModalBtn = document.getElementById('confirm-todo');
  const todoTitleInput = document.getElementById('todo-title');
  const todoDescriptionTextArea = document.getElementById('todo-description');
  const todoDateInput = document.getElementById('todo-due-date');
  const todoPrioritySelect = document.getElementById('todo-priority');


  addTodoBtn.addEventListener('click', clickAddTodoBtn);
  addProjectBtn.addEventListener('click', clickAddProjectBtn);
  closeProjectModalBtn.addEventListener('click', clickCloseProjectModalBtn);
  confirmProjectModalBtn.addEventListener('click', clickConfirmProjectModalBtn);
  projectForm.addEventListener('submit', submitProjectForm);
  closeTodoModalBtn.addEventListener('click', clickCloseTodoModalBtn);
  confirmTodoModalBtn.addEventListener('click', clickConfirmTodoModalBtn);
  todoForm.addEventListener('submit', submitTodoForm);

  function clickAddTodoBtn(){
    todoModal.showModal();
  }

  function clickCloseTodoModalBtn() {
    todoModal.close();
  }

  function clickConfirmTodoModalBtn() {
    if (todoForm.checkValidity()) {
      logicController.addTodo(todoTitleInput.value, todoDescriptionTextArea.value, todoDateInput.value, todoPrioritySelect.value);
      todoModal.close()
      render();
    }
  }

  function submitTodoForm(e) {
    e.preventDefault();
    todoForm.reset();
  }

  function clickAddProjectBtn() {
    projectModal.showModal();
  }

  function clickCloseProjectModalBtn() {
    projectModal.close();
  }

  function clickConfirmProjectModalBtn() {
    if (projectForm.checkValidity()) {
      logicController.addProject(newProjectNameInput.value);
      projectModal.close();
      render();
    }
  }

  function submitProjectForm(e) {
    e.preventDefault();
    projectForm.reset();
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
      const todoContentDiv = document.createElement('div');
      todoContentDiv.textContent = `${todo.title} Due Date: ${todo.dueDate}`;
      todoLi.classList.add(`${todo.priority === 'High' ? 'high-priority' : todo.priority === 'Medium' ? 'medium-priority' : 'low-priority' }`)
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.setAttribute('data-index', idx);
      deleteBtn.addEventListener('click', clickDeleteTodoBtn);
      todoLi.appendChild(todoContentDiv);
      todoLi.appendChild(deleteBtn);
      todosUl.appendChild(todoLi);
    });

    function clickDeleteTodoBtn(e) {
      logicController.deleteTodo(e.target.dataset.index);
      render();
    }

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