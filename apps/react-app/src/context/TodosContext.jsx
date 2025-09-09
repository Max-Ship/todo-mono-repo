import { createContext, useState, useEffect } from "react";
import * as ls from "@utils/utils.js";

const TodosContext = createContext();

export function TodosProvider({ children }) {
  const app = "react";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([...ls.loadTodos(app)]);
  }, []);

  function addTodo(text) {
    const newTodo = { id: Date.now().toString(), text, done: false };
    ls.addTodo(app, newTodo);
    setTodos([...ls.loadTodos(app)]);
  }

  function deleteTodo(id) {
    ls.deleteTodo(app, id);
    setTodos([...ls.loadTodos(app)]);
  }

  function toggleTodo(id) {
    ls.updateTodo(app, id);
    setTodos([...ls.loadTodos(app)]);
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
