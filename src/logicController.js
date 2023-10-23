import createProject from "./project";

export const logicController = (function() {
  let curProject = createProject('General');
  const projects = [curProject];
  // For testing purposes
  addTodo('Walk Dog', 'Take charlie out', '6/10/23', 'Medium');
  addTodo('Take out trash', 'Before dark ideally', '10/23/23', 'High');
  addTodo('Wash up', 'All of the plastics and pots and pans', '10/22/23', 'Low');

  function addTodo(title, description, dueDate, priority){
    curProject.addTodo(title, description, dueDate, priority)
  }

  function editTodo(title, description, dueDate, priority, index) {
    curProject.editTodo(title, description, dueDate, priority, index);
  }

  function addProject(title) {
    const project = createProject(title);
    projects.push(project);
    curProject = project;
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

  return { addTodo, getTodos, addProject, getProjects, setCurrentProject, getCurrentProject, deleteTodo, editTodo }
})();