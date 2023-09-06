import classes from "./Task.module.scss";
import { TaskItem } from "../../../types/task";

export const Task = (props: {
  task: TaskItem;
  deleteTask: Function;
  updateTaskStatus: Function;
}) => {
  return (
    <li className={classes.wrapper}>
      <span>{props.task.text}</span>
      <div className={classes.taskButtons}>
        <button
          className={`${classes.btnTrash} ${classes.button}`}
          onClick={() => {
            props.deleteTask(props.task.id);
          }}
        ></button>
        <button
          className={`${
            props.task.isDone ? classes.btnCheck : classes.btnUncheck
          } ${classes.button}`}
          onClick={() => {
            props.updateTaskStatus(props.task);
          }}
        ></button>
      </div>
    </li>
  );
};
