import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TableData, LongTableData } from "./styles";
import { Link } from "react-router-dom";
import {
  addDays,
  format as formatDate,
  parse as parseDate,
  endOfWeek,
} from "date-fns";
import { useSelector } from "react-redux";

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
          // onClick={() => {
          //     // eslint-disable-next-line no-undef
          //   onDelete(timesheetId);
          // }}
        >
          Delete
        </Button>
      </TableData>
    </tr>
  );
};
