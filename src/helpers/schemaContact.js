import * as yup from "yup";

const phoneExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schemaContact = yup.object().shape({
  name: yup
    .string()
    .min(3, "* Min length is 3")
    .max(40, "* Max length is 40")
    .required("* The Name is required"),
  tel: yup
    .string()
    .matches(phoneExp, "* Phone number is not valid")
    .required("* The Phone is required"),
  email: yup
    .string()
    .email("* Email isn't valid")
    .required("* The email is required"),
  text: yup
    .string()
    .min(10, "* Min length is 10")
    .max(200, "* Max length is 200"),
});
