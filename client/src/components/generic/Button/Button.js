import React from "react";
import { StyledButton } from "./ButtonStyledComponents";

export const Button = ({ backgroundColor, text, onClick }) => {
  return (
    <StyledButton
      style={
        backgroundColor && { backgroundColor: `var(--${backgroundColor})` }
      }
      onClick={onClick}
    >
      {text && text}
    </StyledButton>
  );
};
