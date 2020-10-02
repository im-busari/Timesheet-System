import React from "react";
import { Form } from "react-bootstrap";

export const FormInput = ({
  label,
  type,
  placeholder,
  touched,
  errors,
  validation,
  shouldValidate,
  ...rest
}) => {
  const error = touched && errors && (
    <Form.Text className="text-muted">{errors}</Form.Text>
  );

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        isValid={shouldValidate ? touched && !errors : null}
        isInvalid={shouldValidate ? touched && errors : null}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error}
    </Form.Group>
  );
};
