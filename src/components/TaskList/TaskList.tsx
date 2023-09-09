import { Task } from "./Task/Task";
import classes from "./TaskList.module.scss";
import { TaskItem } from "../../types/task";

export const TaskList = (props: {
  tasks: TaskItem[];
  deleteTask: Function;
  updateTaskStatus: Function;
}) => {
  const unfinishedTasks = () => {
    return props.tasks
      .filter((task) => {
        return !task.isDone;
      })
      .map((el) => {
        return (
          <Task
            task={el}
            key={el.id}
            updateTaskStatus={props.updateTaskStatus}
            deleteTask={props.deleteTask}
          />
        );
      });
  };
  const completedTasks = () => {
    return props.tasks
      .filter((task) => {
        return task.isDone;
      })
      .map((el) => {
        return (
          <Task
            task={el}
            key={el.id}
            updateTaskStatus={props.updateTaskStatus}
            deleteTask={props.deleteTask}
          />
        );
      });
  };

  return (
    <div className={classes.container}>
      <ul className={`${classes.taskList} ${classes.failed}`}>
        {unfinishedTasks()}
      </ul>
      <ul className={`${classes.taskList} ${classes.completed}`}>
        {completedTasks()}
      </ul>
      {props?.tasks?.length === 0 && (
        <div className={classes.empty}>There are currently no tasks</div>
      )}
    </div>
  );
};
