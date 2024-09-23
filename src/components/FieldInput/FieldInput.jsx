import clsx from "clsx";
import { ErrorMessage, Field } from "formik";
import { useId } from "react";
import fieldsCss from "../styles/fields.module.css";

const FieldInput = ({ name, label, className = "" }) => {
  const fieldId = useId();

  return (
    <div className={clsx(fieldsCss.field, className)}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      <Field type="text" name={name} id={fieldId} />
      <ErrorMessage className={fieldsCss.error} name={name} component="span" />
    </div>
  );
};

export default FieldInput;
