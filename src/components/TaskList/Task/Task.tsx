import classes from "./Task.module.scss";

export const Task = () => {
  return (
    <li className={classes.wrapper}>
      <span>Wake up and be awesome</span>
      <div className={classes.taskButtons}>
        <button className={`${classes.btnTrash} ${classes.button}`}></button>
        <button className={`${classes.btnCheck} ${classes.button}`}></button>
      </div>
    </li>
  );
};
