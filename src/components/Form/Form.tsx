import classes from "./Form.module.scss";
import { useState } from "react";

export const Form = (props: { createNewTask: Function }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (text) {
      props.createNewTask(text);
      setText("");
    }
  };

  return (
    <div className={classes.formWrapper}>
      <form action="#" onSubmit={handleSubmit}>
        <label>
          <input
            value={text}
            className={classes.input}
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className={classes.button}></button>
        </label>
      </form>
    </div>
  );
};
