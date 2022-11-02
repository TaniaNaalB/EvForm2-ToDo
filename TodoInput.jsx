import { useState } from "react";

export const TodoInput = ({ todoList, addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Nueva tarea..."
        className="input"
        onChange={handleChange}
        onKeyDown={handleKey}
        value={task}
      />
    </div>
  );
};
