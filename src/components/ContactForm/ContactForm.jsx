import { Form, Formik } from "formik";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";
import Notification from "../Notification/Notification";
import { initialValues } from "./const";
import { validationSchema } from "./const/validation";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit, error }) => {
  return (
    <div className={css.contactForm}>
      <Formik
        validateOnBlur={false}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <FieldInput name="name" label="Name" />
          <FieldInput name="number" label="Number" />
          <div className={css.actions}>
            <Button type="submit">Add contact</Button>
          </div>
          {error && (
            <Notification varient={Notification.varients.ERROR}>
              {error}
            </Notification>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
