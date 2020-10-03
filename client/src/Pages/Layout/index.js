import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  place-content: center;
  height: 95vh;
  width: auto;
  background: var(--white);
`;

export const Layout = ({ children, direction }) => {
  return (
    <LayoutContainer style={{ flexDirection: `${direction}` }}>
      {children}
    </LayoutContainer>
  );
};
