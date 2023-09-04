export const TaskManagerList = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="/">Task Manager</a>
        </div>
      </header>

      <div className="form-wrapper">
        <form action="#">
          <label>
            <input type="text" />
            <button></button>
          </label>
        </form>
      </div>
      <div className="todo-container">
        <ul className="todo-list failed">
          <li className="todo-list-item__wrapper">
            <span>Wake up and be awesome</span>
            <div className="todo-list-item__buttons">
              <button className="btn-trash"></button>
              <button className="btn-check"></button>
            </div>
          </li>
        </ul>
        <ul className="todo-list completed">
          <li className="todo-list-item__wrapper">
            <span>Very inmportant task</span>
            <div className="todo-list-item__buttons">
              <button className="btn-trash"></button>
              <button className="btn-uncheck"></button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
