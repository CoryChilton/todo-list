import createTodo from "./todo";
import createProject from "./project";

export const logicController = (function() {
  let curProject = createProject('General');

  function addTodo(title, description, dueDate, priority, notes){
    curProject.addTodo(title, description, dueDate, priority, notes)
  }

  return { addTodo, getTodos: curProject.getTodos }
})();