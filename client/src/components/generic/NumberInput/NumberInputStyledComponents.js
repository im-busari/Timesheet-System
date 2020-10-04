import styled from "styled-components";

export const StyledInput = styled.input`
  width: 40%;
  text-align: center;

  /* Remove input arrows */
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
