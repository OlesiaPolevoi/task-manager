import { TaskItem } from "../types/task";
import { ListItem } from "../components/ListItem/ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewList = () => {
  const taskList = useSelector((state: RootState) => state.taskList.tasks);

  return (
    <div className="container">
      {taskList.map((el: TaskItem) => {
        return <ListItem key={el.id} task={el} />;
      })}
    </div>
  );
};
