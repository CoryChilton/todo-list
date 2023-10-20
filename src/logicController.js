import createProject from "./project";

export const logicController = (function() {
  let curProject = createProject('General');
  const projects = [curProject];

  function addTodo(title, description, dueDate, priority, notes){
    curProject.addTodo(title, description, dueDate, priority, notes)
  }

  function addProject(title) {
    const project = createProject(title);
    projects.push(project);
  }

  function getProjects() {
    return projects;
  }

  return { addTodo, getTodos: curProject.getTodos, addProject, getProjects }
})();