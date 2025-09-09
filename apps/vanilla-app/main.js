import "@styles/index.css";

import * as ls from "@utils/utils.js";
import valid from "../../packages/utils/validation";
import { createTodoItem, createMessError } from "./src/viewElem";

const form = document.getElementById("todoSubmit");
const inputTodo = document.getElementById("todoInput");
const listTodo = document.getElementById("todoList");
const btnTodo = document.getElementById("btnForm");

const app = "vanilla";

//рендер из localStorage
document.addEventListener("DOMContentLoaded", () => {
  const todos = ls.loadTodos(app);
  if (todos.length > 0) {
    todos.forEach((todo) => {
      const todoItem = createTodoItem(todo.text, todo.id, todo.done);
      listTodo.append(todoItem);
    });
  }
});

inputTodo.addEventListener("focus", function () {
  const isError = document.getElementById("errorValue");
  if (isError) {
    isError.remove();
    this.value = "";
    btnTodo.disabled = false;
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const work = inputTodo.value.trim();

  const validationResult = valid(work);

  if (!validationResult.valid) {
    form.append(createMessError(validationResult.message));
    btnTodo.disabled = true;
    return;
  }

  const liTodo = createTodoItem(work);

  const idTodo = liTodo.id;
  const newTodo = { id: idTodo, text: work, done: false };
  ls.addTodo(app, newTodo);

  listTodo.append(liTodo);

  inputTodo.value = "";
});

listTodo.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("todo__done")) {
    const parentLi = target.closest("li");
    if (parentLi) {
      parentLi.classList.toggle("done");
      ls.updateTodo(app, parentLi.id);
    }
  }

  if (target.classList.contains("todo__delete")) {
    const parentLi = target.closest("li");
    if (parentLi) {
      parentLi.remove();
      ls.deleteTodo(app, parentLi.id);
    }
  }
});
