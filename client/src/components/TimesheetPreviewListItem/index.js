import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TableData, LongTableData } from "./styles";
import { addWeeks, format as formatDate } from "date-fns";

export const TimesheetPreviewListItem = ({
  timesheetId,
  startDate,
  status,
  onEdit,
  onDelete,
}) => {
  const isSubmitted = status === "Submitted";
  const startDateFormatted = formatDate(new Date(startDate), "dd-MM");
  const endDate = formatDate(addWeeks(new Date(startDate), 1), "dd-MM");

  return (
    <tr>
      <TableData>{startDateFormatted}</TableData>
      <TableData>{endDate}</TableData>

      <TableData>{status}</TableData>
      <TableData>
        <Button variant="secondary">{isSubmitted ? "View" : "Edit"}</Button>
      </TableData>
      <TableData>
        <Button variant="danger" disabled={isSubmitted}>
          Delete
        </Button>
      </TableData>
    </tr>
  );
};
