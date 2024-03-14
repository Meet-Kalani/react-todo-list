import UserInput from "./components/UserInput";
import Todos from "./components/Todos";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleAddBtnClick = (currentTodo) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: currentTodo,
      isChecked: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleDoneBtnClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleRemoveBtnClick = (currentTodo) => {
    const updatedTodos = todos.filter((todo) => todo !== currentTodo);

    setTodos(updatedTodos);
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
