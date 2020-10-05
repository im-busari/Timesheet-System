import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
`;

export const NoTimesheetMessage = () => {
  return (
    <Wrapper>
      <p>Seems like you don't have any timesheets</p>
      <p>
        To create one, <Link to="/timesheets/create">click here</Link>
      </p>
    </Wrapper>
  );
};
