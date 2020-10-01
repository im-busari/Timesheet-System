import * as yup from "yup";

const passwordRegex = new RegExp(
  /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
  "gm"
);

const emailRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "g");

export const registerValidation = yup.object({
  email: yup
    .string()
    .matches(emailRegex, "Please enter a valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .min(6, "Your password must be a minimum of 6 characters")
    .matches(
      passwordRegex,
      "Password must contain at least one number and uppercase letter"
    )
    .required("Please enter a password"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const loginValidation = yup.object({
  email: yup
    .string()
    .matches(emailRegex, "Please enter a valid email")
    .required("Please enter an email"),
  username: yup
    .string()
    .min(3, "Your username must be a minimum of 3 characters")
    .required("Please enter a username"),
  password: yup
    .string()
    .min(6, "Your password must be a minimum of 6 characters")
    .matches(
      passwordRegex,
      "Password must contain at least one number and uppercase letter"
    )
    .required("Please enter a password"),
});
