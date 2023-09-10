import { Form } from "../components/Form/Form";
import { TaskList } from "../components/TaskList/TaskList";
import { TaskItem } from "../types/task";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/taskList";

export const TaskManagerListPage = () => {
  const taskList = useSelector((state: RootState) => state.taskList.tasks);

  const dispatch = useDispatch();

  const createNewTask = (text: string) => {
    dispatch(createAction(text));
  };

  const updateTaskStatus = (task: TaskItem) => {
    dispatch(updateAction(task));
  };

  const deleteTask = (id: number) => {
    dispatch(deleteAction(id));
  };

  return (
    <>
      <Form createNewTask={createNewTask} />
      <TaskList
        tasks={taskList}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </>
  );
};
