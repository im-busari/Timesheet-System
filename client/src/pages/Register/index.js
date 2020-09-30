import React from "react";
import { AuthForm } from "../../components/AuthForm";
import { registerValidation } from "../../validation";
import { Layout } from "../Layout";
import { Title } from "../../components/generic/Title";

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

  const handleSubmit = () => {
    console.log("Registering");
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
          onSubmit={handleSubmit}
          validationSchema={registerValidation}
        />
      </div>
    </Layout>
  );
};
