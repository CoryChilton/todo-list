import createTodo from "./todo";

export default function createProject(title) {
  const todos = []

  function addTodo(title, description, dueDate, priority){
    const todo = createTodo(title, description, dueDate, priority);
    todos.push(todo);
  }

  function getTodos() {
    return todos;
  }

  function deleteTodo(idx) {
    todos.splice(idx, 1)
  }

  return { title, addTodo, getTodos, deleteTodo }
}