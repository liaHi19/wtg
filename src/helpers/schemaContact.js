import * as yup from "yup";
export const schemaContact = yup.object().shape({
  email: yup
    .string()
    .email("* Email isn't valid")
    .required("* The email is required"),
});
