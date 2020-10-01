import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 3rem;
  min-width: 1200px;
`;
export const OddRow = styled(Row)`
  background-color: skyblue;
`;
export const EvenRow = styled(Row)`
  background-color: whitesmoke;
`;
export const StyledCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 0;

  border-left: 1px solid black;
`;
export const StyledInput = styled.input`
  width: 30%;
  text-align: center;
`;
