import React from "react";
import { Formik, Field } from "formik";
import { FormInput } from "../generic/FormInput";
import { Button } from "react-bootstrap";
import { FormStyled, ButtonWrapper } from "./styles";
import { useSelector } from "react-redux";
import { DismissibleAlert } from "../../components/DismissibleAlert";

export const AuthForm = ({
  fields,
  initialValues,
  buttonText,
  onSubmit,
  validationSchema,
}) => {
  const error = useSelector((state) => state.auth.error);

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={"Form is empty"}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, touched, errors }) => {
        const isDisabled = isSubmitting || !isValid;

        return (
          <FormStyled>
            {error?.includes("403") ? (
              <DismissibleAlert
                variant="danger"
                alertText="Invalid credentials"
              />
            ) : null}

            {fields.map((field, index) => {
              const { name, type, placeholder, autoComplete, label } = field;
              const shouldValidate = !!validationSchema;

              return (
                <Field
                  as={FormInput}
                  shouldValidate={shouldValidate}
                  touched={touched[name]}
                  errors={errors[name]}
                  key={index}
                  type={type || "text"}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                />
              );
            })}

            <ButtonWrapper>
              <Button
                variant={isDisabled ? "outline-secondary" : "secondary"}
                type="submit"
                disabled={isDisabled}
              >
                {buttonText}
              </Button>
            </ButtonWrapper>
          </FormStyled>
        );
      }}
    </Formik>
  );
};
