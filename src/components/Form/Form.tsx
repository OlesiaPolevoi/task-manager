import classes from "./Form.module.scss";

export const Form = () => {
  return (
    <div className={classes.formWrapper}>
      <form action="#">
        <label>
          <input className={classes.input} type="text" />
          <button className={classes.button}></button>
        </label>
      </form>
    </div>
  );
};
