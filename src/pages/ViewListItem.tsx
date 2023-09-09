import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskItem } from "../types/task";

interface ViewListItemProps {
  tasks: TaskItem[];
}

export const ViewListItem = ({ tasks }: ViewListItemProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState<TaskItem>();

  useEffect(() => {
    const searchTask = tasks.find((el) => {
      return el.id === Number(id);
    });

    if (searchTask) {
      setTask(searchTask);
    } else {
      navigate("./404");
    }
  }, [id, tasks, navigate]);

  return (
    <div className="container">
      <h1>{task?.text}</h1>
    </div>
  );
};
