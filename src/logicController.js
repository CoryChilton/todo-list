import createTodo from "./todo";

export const logicController = (function() {
  const todos = [];
  function addTodo(title, description, dueDate, priority, notes){
    const todo = createTodo(title, description, dueDate, priority, notes);
    todos.push(todo);
  }

  function getTodos() {
    return todos;
  }
  return { addTodo, getTodos }
})();