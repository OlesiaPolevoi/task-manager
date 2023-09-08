import { useState } from "react";
import { Form } from "../components/Form/Form";
import { TaskList } from "../components/TaskList/TaskList";
import { TaskItem } from "../types/task";

export const TaskManagerPage = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const createNewTask = (text: string) => {
    const newTask: TaskItem = {
      id: tasks.length,
      text: text,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (task: TaskItem) => {
    const updatedTasks = tasks.map((el) => {
      if (el.id === task.id) {
        el.isDone = !el.isDone;
      }
      return el;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((el) => {
      return el.id !== id;
    });
    setTasks(filteredTasks);
  };

  return (
    <>
      <Form createNewTask={createNewTask} />
      <TaskList
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </>
  );
};
