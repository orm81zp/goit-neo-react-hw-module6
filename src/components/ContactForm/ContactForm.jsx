import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";
import { initialValues } from "./const";
import { validationSchema } from "./const/validation";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (contact, actions) => {
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <div className={css.contactForm}>
      <Formik
        validateOnBlur={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <FieldInput name="name" label="Name" />
          <FieldInput name="number" label="Number" />
          <div className={css.actions}>
            <Button type="submit">Add contact</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
