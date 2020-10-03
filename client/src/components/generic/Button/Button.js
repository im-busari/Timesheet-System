import React from "react";
import { StyledButton } from "./ButtonStyledComponents";

export const Button = ({ backgroundColor, text, onClick, id }) => {
  return (
    <StyledButton
      style={
        backgroundColor && { backgroundColor: `var(--${backgroundColor})` }
      }
      onClick={onClick}
      id={id}
    >
      {text && text}
    </StyledButton>
  );
};
