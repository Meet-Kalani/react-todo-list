function Todo({ todo, handleDoneBtnClick, handleRemoveBtnClick }) {
  const handleChecked = () => {
    handleDoneBtnClick(todo.id);
  };

  const initialStyle = {
    textDecoration: "initial",
  };

  const lineThroughStyle = {
    textDecoration: "line-through",
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        className="todo-done"
        checked={todo.isCompleted}
        onChange={handleChecked}
      />
      <span
        className="todo-text"
        style={todo.isCompleted ? lineThroughStyle : initialStyle}
      >
        {todo.text}
      </span>
      <button
        type="button"
        className="todo-remove"
        onClick={() => handleRemoveBtnClick(todo)}
      >
        Remove
      </button>
    </div>
  );
}

export default Todo;
