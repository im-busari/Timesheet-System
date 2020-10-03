import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export const DismissibleAlert = ({ alertText, variant }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Alert variant={variant} dismissible onClose={handleClose}>
      {alertText}
    </Alert>
  );
};
