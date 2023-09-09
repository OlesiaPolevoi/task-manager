import { Link } from "react-router-dom";
import { TaskItem } from "../../types/task";
import classes from "./ListItem.module.scss";

export const ListItem = ({ task }: { task: TaskItem }) => {
  return (
    <Link
      to={`/list/${task.id}`}
      className={`${classes.link} ${
        task.isDone ? classes.done : classes.notDone
      }`}
    >
      {task.text}
    </Link>
  );
};
