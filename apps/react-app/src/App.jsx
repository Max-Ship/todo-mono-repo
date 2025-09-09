import { TodosProvider } from "./context/TodosContext.jsx";
import Form from "./components/FormTodo.jsx";
import ListTodo from "./components/ListTodo.jsx";
import "@styles/index.css";

function App() {
  return (
    <TodosProvider>
      <div className="todo todo__container">
        <h1 className="todo__main-title">Список дел (REACT)</h1>
        <Form />
        <ListTodo />
      </div>
    </TodosProvider>
  );
}

export default App;
