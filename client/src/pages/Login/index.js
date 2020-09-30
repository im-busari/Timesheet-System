import React from "react";
import { AuthForm } from "../../components/AuthForm";
import { loginValidation } from "../../validation";

export const LoginPage = () => {
  const fields = [
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
      autoComplete: "current-password",
    },
  ];

  const handleSubmit = () => {
    console.log("logging in");
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm
        buttonText="Login"
        fields={fields}
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginValidation}
      />
    </div>
  );
};
