import React from "react";
import { Formik, Form, Field } from "formik";
import { FormInput } from "../generic/FormInput";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const FormStyled = styled(Form)`
  width: 15%;
`;

const ButtonWrapper = styled(Button)`
  display: flex;
  place-content: center;
  margin-top: 2rem;
`;

export const AuthForm = ({
  fields,
  initialValues,
  buttonText,
  onSubmit,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      initialErrors={"Form is empty"}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, touched, errors }) => {
        return (
          <FormStyled>
            {fields.map((field, index) => {
              const { type, placeholder, autoComplete } = field;
              const label = type.charAt(0).toUpperCase() + type.slice(1);

              return (
                <Field
                  as={FormInput}
                  touched={touched[type]}
                  errors={errors[type]}
                  key={index}
                  type={type || "text"}
                  name={type}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}

            <ButtonWrapper>
              <Button
                variant="outline-secondary"
                type="submit"
                disabled={isSubmitting || !isValid}
              ></Button>
            </ButtonWrapper>
          </FormStyled>
        );
      }}
    </Formik>
  );
};
