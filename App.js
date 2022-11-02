import "./style.css";
import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

export default function App() {
  const todoListIni = [
    {
      id: Date.now() + 1,
      task: "Tarea 1",
      active: true
    },
    {
      id: 2,
      task: "Tarea 2",
      active: true
    },
    {
      id: 3,
      task: "Tarea 3",
      active: true
    },
    {
      id: 4,
      task: "Tarea 4",
      active: true
    }
  ];

  const [todoList, setTodoList] = useState([]);
  const [todoBackup, setTodoBackup] = useState([]);

  const addTask = (task) => {
    setTodoList([
      {
        id: Date.now(),
        task: task,
        active: true
      },
      ...todoList
    ]);
    setTodoBackup(todoList);
  };

  const toggleTask = (id) => {
    const newArr = [...todoList];
    const newTask = newArr.find((item) => item.id === id);
    newTask.active = !newTask.active;
    setTodoList(newArr);
    setTodoBackup(todoList);
  };

  const deleteTask = () => {
    const newArr = [...todoList];
    setTodoList(newArr.filter((item) => item.active));
    setTodoBackup(newArr.filter((item) => item.active));
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className="todoContainer">
        <TodoInput todoList={todoList} addTask={addTask} />
        <TodoList todoList={todoList} toggleTask={toggleTask} />
        <div className="todoFooter">
          <hr />
          <h3 className="allTask">Total de tareas: {todoList.length}</h3>
          <div className="todoFooterStats">
            <div className="linkFooter linkdelete" onClick={deleteTask}>
              Borrar completadas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
