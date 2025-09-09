import useTodos from "../hooks/useTodos.jsx";
import ItemTodo from "./ItemTodo.jsx";

const ListTodo = function () {
  const { todos } = useTodos();

  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <ItemTodo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ListTodo;
