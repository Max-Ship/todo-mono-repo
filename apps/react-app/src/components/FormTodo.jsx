import { useState } from "react";
import useTodos from "../hooks/useTodos.jsx";
import validateTodoInput from "@utils/validation.js";

const Form = function () {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateTodoInput(text);
    if (!validation.valid) {
      setError(validation.message);
      return;
    }
    addTodo(text);
    setText("");
  };

  const handleСlearError = () => {
    if (error) {
      setError(null);
      setText("");
    }
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        className="todo__input"
        id="formInputTodo"
        name="todo"
        type="text"
        value={text}
        onFocus={handleСlearError}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="todo__btn" type="submit">
        Добавмить дело
      </button>
      {error && (
        <div id="error-msg" className="todo__error" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default Form;
