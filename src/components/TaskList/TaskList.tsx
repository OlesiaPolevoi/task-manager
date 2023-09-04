import { Task } from "./Task/Task";
import classes from "./TaskList.module.scss";

export const TaskList = () => {
  return (
    <div className={classes.container}>
      <ul className="todo-list failed">
        <Task />
      </ul>
      <ul className="todo-list completed">
        <Task />
        {/* <li className="todo-list-item__wrapper">
          <span>Very inmportant task</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  );
};
