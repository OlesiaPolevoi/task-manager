import { TaskItem } from "../types/task";
import { ListItem } from "../components/ListItem/ListItem";

//NOTE - use similar pattern throughout components

interface HomePageProps {
  tasks: TaskItem[];
}
export const HomePage = ({ tasks }: HomePageProps) => {
  return (
    <div className="container">
      {tasks.map((el: TaskItem) => {
        return <ListItem key={el.id} task={el} />;
      })}
    </div>
  );
};
