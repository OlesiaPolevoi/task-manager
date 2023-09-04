import "./Task.scss";

export const Task = () => {
  return (
    <li className="todo-list-item__wrapper">
      <span>Wake up and be awesome</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash"></button>
        <button className="btn-check"></button>
      </div>
    </li>
  );
};
