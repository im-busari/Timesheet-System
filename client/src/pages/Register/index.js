import React from "react";
import { AuthForm } from "../../components/AuthForm";
import { registerValidation } from "../../validation";

export const RegisterPage = () => {
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
    <div>
      <h1>Register</h1>
      <AuthForm
        buttonText="Login"
        fields={fields}
        initialValues={{ username: "", password: "", rePassword: "" }}
        onSubmit={handleSubmit}
        validationSchema={registerValidation}
      />
    </div>
  );
};
