<template>
  <div class="todo todo__container">
    <h1 class="todo__main-title">Список дел (VUE)</h1>

    <form @submit.prevent="addTodoHandler" class="todo__form">
      <input
        type="text"
        v-model="newTodo"
        placeholder="Запишите дело"
        class="todo__input"
        @focus="clearError"
      />
      <button type="submit" class="todo__btn">Добавить дело</button>

      <span v-if="errorMessage" id="errorValue" class="todo__error">{{
        errorMessage
      }}</span>
    </form>

    <ul class="todo__list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ done: todo.done }"
        class="todo__item"
      >
        <span>{{ todo.text }}</span>
        <div class="todo__wrapBtnItem">
          <button class="todo__done" @click="toggleDoneHandler(todo)">
            Готово
          </button>
          <button class="todo__delete" @click="removeTodoHandler(todo.id)">
            Удалить
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { addTodo, deleteTodo, updateTodo, loadTodos } from "@utils/utils.js";
import validateTodoInput from "@utils/validation.js";

const app = "vue";

const newTodo = ref("");
const todos = ref(loadTodos(app));
const errorMessage = ref("");

function clearError() {
  errorMessage.value = "";
  newTodo.value = "";
}

function addTodoHandler() {
  const text = newTodo.value.trim();

  const validationResult = validateTodoInput(text);
  if (!validationResult.valid) {
    errorMessage.value = validationResult.message;
    return;
  }

  const newTask = { id: Date.now(), text, done: false };

  addTodo(app, newTask);
  todos.value.push(newTask);
  newTodo.value = "";
}

function removeTodoHandler(id) {
  deleteTodo(app, id);
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

function toggleDoneHandler(todo) {
  updateTodo(app, todo.id);
  const t = todos.value.find((t) => t.id === todo.id);
  if (t) t.done = !t.done;
}
</script>

<style scoped>
@import "@styles/index.css";
</style>
