import React from "react";
import { AuthForm } from "../../components/AuthForm";
import { loginValidation } from "../../validation";
import { Layout } from "../Layout";
import { Title } from "../../components/generic/Title";

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

  const handleSubmit = () => {
    console.log("logging in");
  };

  return (
    <Layout direction="column">
      <Title text="Login" />
      <div>
        <AuthForm
          buttonText="Login"
          fields={fields}
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={loginValidation}
        />
      </div>
    </Layout>
  );
};
