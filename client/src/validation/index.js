import * as yup from "yup";

export const registerValidation = yup.object({
  name: yup
    .string()
    .min(3, "Your name must be a minimum of 3 characters")
    .required("Please enter a name"),
  username: yup
    .string()
    .min(3, "Your username must be a minimum of 3 characters")
    .required("Please enter a username"),
  password: yup
    .string()
    .min(6, "Your password must be a minimum of 6 characters")
    .required("Please enter a password"),
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
