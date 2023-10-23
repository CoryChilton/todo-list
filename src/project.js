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

  function editTodo(title, description, dueDate, priority, index) {
    const todo = todos[index];
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
  }

  return { title, addTodo, getTodos, deleteTodo, editTodo }
}