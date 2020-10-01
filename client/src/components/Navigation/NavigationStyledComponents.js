import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--blue);
  padding: 1rem;
`;
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Username = styled.div`
  cursor: default;
  color: var(--white);
`;
export const StyledNavItem = styled(Nav.Item)`
  list-style-type: none;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.125);
  }
`;
export const StyledNavLink = styled(Nav.Link)`
  color: var(--white);
  :hover {
    color: var(--white);
  }
`;
