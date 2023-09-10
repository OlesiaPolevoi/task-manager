import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskItem } from "../types/task";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewListItem = () => {
  const taskList = useSelector((state: RootState) => state.taskList.tasks);

  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState<TaskItem>();

  useEffect(() => {
    const searchTask = taskList.find((el) => {
      return el.id === Number(id);
    });

    if (searchTask) {
      setTask(searchTask);
    } else {
      navigate("./404");
    }
  }, [id, taskList, navigate]);

  return (
    <div className="container">
      <h1>{task?.text}</h1>
    </div>
  );
};
