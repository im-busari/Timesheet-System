import * as yup from "yup";

export const registerValidation = yup.object({
  username: yup
    .string()
    .min(3, "Your username must be a minimum of 3 characters")
    .required("Please enter a username"),
  password: yup
    .string()
    .min(6, "Your password must be a minimum of 6 characters")
    .required("Please enter a password"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const loginValidation = yup.object({
  username: yup
    .string()
    .min(3, "Your username must be a minimum of 3 characters")
    .required("Please enter a username"),
  password: yup
    .string()
    .min(6, "Your password must be a minimum of 6 characters")
    .required("Please enter a password"),
});
