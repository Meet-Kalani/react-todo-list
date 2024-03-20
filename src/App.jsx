// NOTE: Converted application to use useReducer hook
import UserInput from "./components/UserInput";
import Todos from "./components/Todos";

import { useReducer } from "react";

function reducer(todos, action) {
  if (action.type === "add-todo") {
    return [
      ...todos,
      {
        id: crypto.randomUUID(),
        text: action.currentTodo,
        isChecked: false,
      },
    ];
  } else if (action.type === "done-todo") {
    return todos.map((todo) => {
      if (todo.id === action.id) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });
  } else if (action.type === "remove-todo") {
    return todos.filter((todo) => todo !== action.currentTodo);
  }
}

function App() {
  const [todos, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleAddBtnClick = (currentTodo) => {
    dispatch({ type: "add-todo", currentTodo });
  };

  const handleDoneBtnClick = (id) => {
    dispatch({ type: "done-todo", id });
  };

  const handleRemoveBtnClick = (currentTodo) => {
    dispatch({ type: "remove-todo", currentTodo });
  };

  const handleSaveBtnClick = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <main id="todo-list">
      <div className="todo-list-header">
        <UserInput handleAddBtnClick={handleAddBtnClick} />
      </div>
      {todos.length > 0 && (
        <div className="todo-list-body">
          <Todos
            todos={todos}
            handleDoneBtnClick={handleDoneBtnClick}
            handleRemoveBtnClick={handleRemoveBtnClick}
          />
        </div>
      )}
      <div className="spacer"></div>
      <button type="button" className="todo-save" onClick={handleSaveBtnClick}>
        Save
      </button>
    </main>
  );
}

export default App;
