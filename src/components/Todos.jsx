import Todo from "./Todo";

function Todos({ todos, handleDoneBtnClick, handleRemoveBtnClick }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleRemoveBtnClick={handleRemoveBtnClick}
            handleDoneBtnClick={handleDoneBtnClick}
          />
        );
      })}
    </>
  );
}

export default Todos;
