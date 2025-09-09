import useTodos from "../hooks/useTodos.jsx";

const ItemTodo = function ({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li id={todo.id} className={"todo__item" + (todo.done ? " done" : "")}>
      <span>{todo.text}</span>
      <div className="todo__wrapBtnItem">
        <button className="todo__done" onClick={() => toggleTodo(todo.id)}>
          {todo.done ? "Отменить" : "Сделано"}
        </button>
        <button className="todo__delete" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ItemTodo;
