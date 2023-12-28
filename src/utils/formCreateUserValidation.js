import * as yup from "yup";

export const createUserValidationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(1, "Username must be greater to 1")
    .max(30, "Username must be less than 30"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be greater to 5")
    .max(50, "Password must be less than 50"),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
