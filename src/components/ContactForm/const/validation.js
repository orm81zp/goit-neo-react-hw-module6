import * as yup from "yup";

const text = {
  required: () => "The field is mandatory.",
  min: (min) => `The minimum number of characters is ${min}.`,
  max: (max) => `The maximum number of characters is ${max}.`,
};

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, text.min(3))
    .max(50, text.max(50))
    .required(text.required()),
  number: yup
    .string()
    .min(3, text.min(3))
    .max(50, text.max(50))
    .required(text.required()),
});
