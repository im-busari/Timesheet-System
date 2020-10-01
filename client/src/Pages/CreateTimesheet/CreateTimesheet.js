import React, { useState, useEffect } from "react";
import {
  MainContainer,
  SubContainer,
  SubmitButton,
  StyledSelect,
} from "./CreateTimesheetStyledComponents";
import { Title } from "../../components/generic/Title";
import { startOfWeek, subWeeks, addWeeks, format, endOfWeek } from "date-fns";

export const CreateTimesheet = () => {
  const [monday, setMonday] = useState("");

  const handleChange = (e) => {
    setMonday(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (monday === "") {
      return;
    }
  };

  /* Reset the state on unmount */
  useEffect(() => () => setMonday(""));

  /* Mondays for the available timesheets */
  const currentMonday = startOfWeek(new Date(), { weekStartsOn: 1 });
  const previousMonday = subWeeks(currentMonday, 1);
  const nextMonday = addWeeks(currentMonday, 1);
  const mondayAfterNext = addWeeks(currentMonday, 2);

  /* Formatted start and end dates for the available timesheets */
  const previousWeek = {
    mon: format(previousMonday, "dd-MM-yyyy"),
    sun: format(endOfWeek(previousMonday, { weekStartsOn: 1 }), "dd-MM-yyyy"),
  };
  const currentWeek = {
    mon: format(currentMonday, "dd-MM-yyyy"),
    sun: format(endOfWeek(currentMonday, { weekStartsOn: 1 }), "dd-MM-yyyy"),
  };
  const nextWeek = {
    mon: format(nextMonday, "dd-MM-yyyy"),
    sun: format(endOfWeek(nextMonday, { weekStartsOn: 1 }), "dd-MM-yyyy"),
  };
  const afterNextWeek = {
    mon: format(mondayAfterNext, "dd-MM-yyyy"),
    sun: format(endOfWeek(mondayAfterNext, { weekStartsOn: 1 }), "dd-MM-yyyy"),
  };

  return (
    <MainContainer>
      <Title color="red" text="Create New Timesheet" />

      <SubContainer>
        <form onSubmit={handleSubmit}>
          <StyledSelect onChange={handleChange}>
            <option selected disabled hidden>
              Choose week...
            </option>
            <option value={`${previousWeek.mon}`}>
              {`${previousWeek.mon} - ${previousWeek.sun}`}
            </option>
            <option value={`${currentWeek.mon}`}>
              {`${currentWeek.mon} - ${currentWeek.sun}`}
            </option>
            <option value={`${nextWeek.mon}`}>
              {`${nextWeek.mon} - ${nextWeek.sun}`}
            </option>
            <option value={`${afterNextWeek.mon}`}>
              {`${afterNextWeek.mon} - ${afterNextWeek.sun}`}
            </option>
          </StyledSelect>

          <SubmitButton>Create</SubmitButton>
        </form>
      </SubContainer>
    </MainContainer>
  );
};
