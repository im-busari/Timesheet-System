import React from "react";
import { StyledTitle } from "./TitleStyledComponents";

export const Title = ({ color, text }) => {
  return (
    <StyledTitle style={color && { color: `var(--${color})` }}>
      {text}
    </StyledTitle>
  );
};
