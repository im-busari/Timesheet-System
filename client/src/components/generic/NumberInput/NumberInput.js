import React from "react";
import { StyledInput } from "./NumberInputStyledComponents";

export const NumberInput = ({ onChange, id, ...rest }) => {
  return (
    <StyledInput
      type="number"
      min=".25"
      max="24"
      onChange={onChange}
      id={id}
      {...rest}
    />
  );
};
