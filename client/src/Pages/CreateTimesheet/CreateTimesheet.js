import React, { useState } from "react";
import {
  MainContainer,
  SubContainer,
  SubmitButton,
  StyledSelect,
} from "./CreateTimesheetStyledComponents";
import { Title } from "../../components/generic/Title";
import { startOfWeek, subWeeks, addWeeks, format, endOfWeek } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { createTimesheet } from "../../redux/slices/timesheet";
import { useHistory } from "react-router-dom";

export const CreateTimesheet = () => {
  const history = useHistory();

  const [monday, setMonday] = useState("");

  const handleChange = (e) => {
    setMonday(e.target.value);
  };

  const dispatch = useDispatch();

  // const createdTimesheet = useSelector(
  //   (state) => state.timesheets.currentTimesheetId
  // );

  // React.useEffect(() => {
  //   if (createdTimesheet !== null) {
  //     history.push(`/timesheets/edit/${createdTimesheet}`);
  //   }
  // }, [createdTimesheet]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (monday === "") {
      return;
    }

    dispatch(createTimesheet({ startDate: monday }));
    history.push("/");
  };

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
          <StyledSelect defaultValue onChange={handleChange}>
            <option disabled hidden>
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

          <SubmitButton type="submit">Create</SubmitButton>
        </form>
      </SubContainer>
    </MainContainer>
  );
};
