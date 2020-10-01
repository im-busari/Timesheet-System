import React from "react";
import { Form } from "react-bootstrap";

export const FormInput = ({
  label,
  type,
  placeholder,
  touched,
  errors,
  validation,
  ...rest
}) => {
  const error = touched && errors && (
    <Form.Text className="text-muted">{errors}</Form.Text>
  );

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        isValid={touched && !errors}
        isInvalid={touched && errors}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error}
    </Form.Group>
  );
};
