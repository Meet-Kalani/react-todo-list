import { useState } from "react";

function UserInput({ handleAddBtnClick }) {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  //   was dpoing belowe function
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userInput) {
      return;
    }

    handleAddBtnClick(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        className="todo-input"
        type="text"
        value={userInput}
        onChange={handleInputChange}
      />
      <button className="add-todo-btn" type="submit">
        +
      </button>
    </form>
  );
}

export default UserInput;
