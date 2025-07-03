// NOTE: Converted application to use useReducer hook
import UserInput from "./components/UserInput";
import Todos from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import {
  discardTodo,
  insertTodo,
  markTodoAsCompleted,
} from "./features/todo/todoSlice";

function App() {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const handleAddBtnClick = (currentTodo) => {
    dispatch(insertTodo(currentTodo));
  };

  const handleDoneBtnClick = (id) => {
    dispatch(markTodoAsCompleted({ id }));
  };

  const handleRemoveBtnClick = (currentTodo) => {
    dispatch(discardTodo(currentTodo));
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
