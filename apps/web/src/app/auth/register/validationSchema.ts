import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  role: Yup.string().required("role is required"),
  email: Yup.string().required("email is required").email(),
  password: Yup.string().required("password is required"),
});
