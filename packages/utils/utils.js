const STORAGE_KEY = `-todo-list`;

export function loadTodos(app) {
  const todoJson = localStorage.getItem(app + STORAGE_KEY);
  return todoJson ? JSON.parse(todoJson) : [];
}

export function saveTodos(app, todos) {
  localStorage.setItem(app + STORAGE_KEY, JSON.stringify(todos));
}

export function addTodo(app, newTodo) {
  const todos = loadTodos(app);
  todos.push(newTodo);
  saveTodos(app, todos);
}

export function deleteTodo(app, id) {
  const todos = loadTodos(app);
  const filtered = todos.filter((todo) => todo.id !== id);
  saveTodos(app, filtered);
}
export function updateTodo(app, updatedTodoId) {
  const todos = loadTodos(app);
  const updated = todos.map((todo) =>
    todo.id === updatedTodoId ? { ...todo, done: !todo.done } : todo
  );
  saveTodos(app, updated);
}
