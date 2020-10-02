import React from "react";
import { AuthForm } from "../../components/AuthForm";
import { registerValidation } from "../../validation";
import { Layout } from "../Layout";
import { Title } from "../../components/generic/Title";
import { post } from "../../api/user";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/auth";

export const RegisterPage = () => {
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      autoComplete: "none",
    },
    {
      name: "username",
      label: "Username",
      type: "username",
      placeholder: "Enter your username",
      autoComplete: "none",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      autoComplete: "new-password",
    },
    {
      name: "rePassword",
      label: "Repeat password",
      type: "password",
      placeholder: "Repeat password",
      autoComplete: "none",
    },
  ];

  const dispatch = useDispatch();
  const registerUser = async (values, actions) => {
    const { email, username, password } = values;
    await register({ email, username, password })(dispatch);
    actions.setSubmitting(false);
  };

  return (
    <Layout direction="column">
      <Title text="Register" />
      <div>
        <AuthForm
          buttonText="Register"
          fields={fields}
          initialValues={{
            email: "",
            username: "",
            password: "",
            rePassword: "",
          }}
          onSubmit={registerUser}
          validationSchema={registerValidation}
        />
      </div>
    </Layout>
  );
};
