import React from "react";
import { AuthForm } from "../../components/AuthForm";
import { Layout } from "../Layout";
import { Title } from "../../components/generic/Title";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/auth";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      autoComplete: "none",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      autoComplete: "current-password",
    },
  ];

  const dispatch = useDispatch();
  const history = useHistory();
  const loginUser = async (values, actions) => {
    await login(values)(dispatch);
    actions.setSubmitting(false);
    history.push("/");
  };

  return (
    <Layout direction="column">
      <Title text="Login" />
      <div>
        <AuthForm
          buttonText="Login"
          fields={fields}
          initialValues={{ email: "", password: "" }}
          onSubmit={loginUser}
        />
      </div>
    </Layout>
  );
};
