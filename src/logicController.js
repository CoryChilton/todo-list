import createProject from "./project";

export const logicController = (function() {
  let curProject = createProject('General');
  const projects = [curProject];
  // For testing purposes
  addTodo('Walk Dog', 'Take charlie out', new Date(2023, 6, 10), 'Medium');
  addTodo('Take out trash', 'Before dark ideally', new Date(2022, 11, 11), 'High');
  addTodo('Wash up', 'All of the plastics and pots and pans', new Date(2024, 0, 1), 'Low');

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