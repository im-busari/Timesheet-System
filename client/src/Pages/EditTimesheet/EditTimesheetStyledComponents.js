import styled from "styled-components";
import { Row } from "react-bootstrap";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  min-width: 1200px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Information = styled.div``;
export const WeekInfo = styled.div``;
export const UserInfo = styled.div``;
export const BtnsContainer = styled.div`
  display: flex;
`;

export const HeaderFooterRow = styled(Row)`
  background-color: var(--blue);
  color: var(--white);
`;
export const EntryRow = styled(Row)`
  background-color: var(--gray);
`;
export const StyledCol = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 0;
`;
export const DeleteBtn = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.25rem;
  :focus {
    outline: none;
  }
`;
