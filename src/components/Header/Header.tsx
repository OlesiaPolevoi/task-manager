import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link;
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/task-manager" className={getActiveClass}>
          Tasks
        </NavLink>
      </div>
    </header>
  );
};
