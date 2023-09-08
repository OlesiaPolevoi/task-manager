import { TaskItem } from "../../types/task";
import classes from "./ListItem.module.scss";

export const ListItem = ({ task }: { task: TaskItem }) => {
  return (
    <a
      className={`${classes.link} ${
        task.isDone ? classes.done : classes.notDone
      }`}
      target="_blank"
      href={`/app/list/${task.id}`}
    >
      {task.text}
    </a>
  );
};
