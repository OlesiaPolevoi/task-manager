import { TaskItem } from "../types/task";
import { ListItem } from "../components/ListItem/ListItem";

//NOTE - use similar pattern throughout components

interface ViewListProps {
  tasks: TaskItem[];
}
export const ViewList = ({ tasks }: ViewListProps) => {
  return (
    <div className="container">
      {tasks.map((el: TaskItem) => {
        return <ListItem key={el.id} task={el} />;
      })}
    </div>
  );
};
