import { TaskItem } from "../../../types/task";
import {
  TaskControl,
  TaskControls,
  TaskText,
  TaskWrapper,
} from "./Task.styled";
import checkIcon from "../../../assets/images/check.png";
import uncheckIcon from "../../../assets/images/uncheck.png";
import trashIcon from "../../../assets/images/trash.png";

export const Task = (props: {
  task: TaskItem;
  deleteTask: Function;
  updateTaskStatus: Function;
}) => {
  return (
    <TaskWrapper>
      <TaskText>{props.task.text}</TaskText>
      <TaskControls>
        <TaskControl
          icon={trashIcon}
          onClick={() => {
            props.deleteTask(props.task.id);
          }}
        ></TaskControl>
        <TaskControl
          icon={props.task.isDone ? checkIcon : uncheckIcon}
          onClick={() => {
            props.updateTaskStatus(props.task);
          }}
        ></TaskControl>
      </TaskControls>
    </TaskWrapper>
  );
};
