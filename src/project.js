import createTodo from "./todo";

export default function createProject(title) {
  const todos = []

  function addTodo(title, description, dueDate, priority, notes){
    const todo = createTodo(title, description, dueDate, priority, notes);
    todos.push(todo);
  }

  function getTodos() {
    return todos;
  }

  return { title, addTodo, getTodos }
}