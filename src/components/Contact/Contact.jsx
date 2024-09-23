import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { isApproved } from "../../utils/confirm";
import Button from "../Button/Button";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleClick = () => {
    if (isApproved("Do you want to delete?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className={css.contact}>
      <div className={css.content}>
        <div className={css.row}>
          <FaUser />
          <span>{name}</span>
        </div>
        <div className={css.row}>
          <FaPhone />
          <span>{number}</span>
        </div>
      </div>
      <div className={css.actions}>
        <Button onClick={handleClick}>Delete</Button>
      </div>
    </div>
  );
};

export default Contact;
