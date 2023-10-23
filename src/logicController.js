import createProject from "./project";

export const logicController = (function() {
  let curProject = createProject('General');
  const projects = [curProject];

  function addTodo(title, description, dueDate, priority){
    curProject.addTodo(title, description, dueDate, priority)
  }

  function addProject(title) {
    const project = createProject(title);
    projects.push(project);
  }

  function getProjects() {
    return projects;
  }

  function setCurrentProject(idx) {
    curProject = projects[idx];
  }

  function getCurrentProject() {
    return curProject;
  }

  function getTodos() {
    return curProject.getTodos();
  }

  function deleteTodo(idx) {
    curProject.deleteTodo(idx);
  }

  return { addTodo, getTodos, addProject, getProjects, setCurrentProject, getCurrentProject, deleteTodo }
})();