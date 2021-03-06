import styled from "styled-components";
import { Form } from "formik";

const FormStyled = styled(Form)`
  width: 100%;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  place-content: center;
  margin-top: 2rem;
`;

export { FormStyled, ButtonWrapper };
