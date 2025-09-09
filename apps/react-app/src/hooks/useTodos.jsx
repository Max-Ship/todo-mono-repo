import { useContext } from "react";
import TodosContext from "../context/TodosContext.jsx";

function useTodos() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within TodosProvider");
  }
  return context;
}

export default useTodos;
