import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { TaskList } from "../components/TaskList/TaskList";

export const TaskManagerPage = () => {
  return (
    <>
      <Header />
      <Form />
      <TaskList />
    </>
  );
};
