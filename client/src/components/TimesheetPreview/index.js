import React from "react";
import { TimesheetPreviewListItem } from "../TimesheetPreviewListItem";
import { Table } from "react-bootstrap";
import { TableHeader } from "./styles";
import { Layout } from "../../Pages/Layout";

export const TimesheetPreview = ({ timesheets }) => {
  const allTimesheets = timesheets.map((timesheet) => {
    const { status, startDate, id } = timesheet.data;

    return (
      <TimesheetPreviewListItem startDate="08-20" status={status} key={id} />
    );
  });

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <TableHeader>Start Date</TableHeader>
          <TableHeader>End Date</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Update</TableHeader>
          <TableHeader>Remove</TableHeader>
        </tr>
      </thead>
      <tbody>{allTimesheets}</tbody>
    </Table>
  );
};
