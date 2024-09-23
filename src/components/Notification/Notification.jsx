import classNames from "clsx";
import { VARIENTS } from "./const";
import css from "./Notification.module.css";

const Notification = ({ children, varient }) => {
  return (
    <div
      className={classNames(css.notification, {
        [css[varient]]: !!varient,
      })}
    >
      {children}
    </div>
  );
};

Notification.varients = Object.assign({}, VARIENTS);

export default Notification;
