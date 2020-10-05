import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
export const StyledSelect = styled.select`
  outline: none;
  border: none;
  padding: 1rem;
  background-color: var(--blue);
  margin-right: 1rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--white);
  cursor: pointer;

  /* Remove dropdown arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
`;
export const SubmitButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  padding: 1rem;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 6px;
  :focus {
    outline: none;
  }
`;
