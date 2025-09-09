export function createTodoItem(work, id = false, done = false) {
  const item = document.createElement("li");

  if (id) {
    item.id = id;
  } else {
    item.id = `${Date.now()}`;
  }

  if (done) item.classList.add("done");

  item.classList.add("todo__item");

  const textSpan = document.createElement("span");
  textSpan.textContent = work;
  item.appendChild(textSpan);

  const todoDone = document.createElement("button");
  todoDone.classList.add("todo__done");
  todoDone.textContent = "Done";

  const todoDel = document.createElement("button");
  todoDel.classList.add("todo__delete");
  todoDel.textContent = "Del";

  const wrapBtnItem = document.createElement("div");
  wrapBtnItem.classList.add("todo__wrapBtnItem");

  wrapBtnItem.append(todoDone, todoDel);
  item.appendChild(wrapBtnItem);

  return item;
}

export function createMessError(text) {
  const errorValue = document.createElement("span");
  errorValue.id = "errorValue";
  errorValue.classList.add("todo__error");
  errorValue.textContent = text;

  return errorValue;
}
