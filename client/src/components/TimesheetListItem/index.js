import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TableData, LongTableData } from "./styles";
import { Link, useHistory } from "react-router-dom";
import {
  addDays,
  format as formatDate,
  parse as parseDate,
  endOfWeek,
} from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { deleteTimesheet } from "../../redux/slices/timesheet";

export const TimesheetListItem = ({ timesheetId }) => {
  const timesheet = useSelector((state) => state.timesheets.byId[timesheetId]);
  const { status, startDate } = timesheet.data;

  const isSubmitted = status === "Submitted";

  const [year, month, day] = startDate.split("-").reverse();

  const startDateFormat = new Date(year, month - 1, day);
  const startDateFormatted = formatDate(startDateFormat, "dd-MM");

  const endDateFormatted = formatDate(
    endOfWeek(startDateFormat, { weekStartsOn: 1 }),
    "dd-MM"
  );

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <tr>
      <TableData>{startDateFormatted}</TableData>
      <TableData>{endDateFormatted}</TableData>

      <TableData>{status}</TableData>
      <TableData>
        <Link to={`/timesheets/edit/${timesheetId}`}>
          <Button variant="secondary">{isSubmitted ? "View" : "Edit"}</Button>
        </Link>
      </TableData>
      <TableData>
        <Button
          variant="danger"
          disabled={isSubmitted}
          onClick={() => {
            console.log("Dispatch delete!");
            dispatch(deleteTimesheet({ timesheetId }));
            history.push("/");
          }}
        >
          Delete
        </Button>
      </TableData>
    </tr>
  );
};
