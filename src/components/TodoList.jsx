export const TodoList = ({ todoList, toggleTask }) => {
    return (
      <div className="todoList">
        {todoList.map(({ id, task, active }) => (
          <div key={id} className={!active ? "todoItem toggleTask" : "todoItem"}>
            <input
              type="checkbox"
              onClick={() => toggleTask(id)}
              checked={!active}
            />
            <p>{task}</p>
          </div>
        ))}
      </div>
    );
  };
  