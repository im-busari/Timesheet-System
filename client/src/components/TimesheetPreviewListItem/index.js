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

export const TimesheetPreviewListItem = ({
  timesheetId,
  startDate: startDateString,
  status,
  onDelete,
}) => {
  const isSubmitted = status === "Submitted";

  const [year, month, day] = startDateString.split("-").reverse();

  const startDate = new Date(year, month - 1, day);
  const startDateFormatted = formatDate(startDate, "dd-MM");

  const endDateFormatted = formatDate(
    endOfWeek(startDate, { weekStartsOn: 1 }),
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
          onClick={() => {
            onDelete(timesheetId);
          }}
        >
          Delete
        </Button>
      </TableData>
    </tr>
  );
};
