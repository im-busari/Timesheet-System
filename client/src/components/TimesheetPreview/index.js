import React from "react";
import { TimesheetPreviewListItem } from "../TimesheetPreviewListItem";
import { Table } from "react-bootstrap";
import { TableHeader } from "./styles";
import { Layout } from "../../Pages/Layout";

export const TimesheetPreview = () => {
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
      <tbody>
        <TimesheetPreviewListItem startDate="09/21" status="Open" />
        <TimesheetPreviewListItem startDate="09/28" status="Open" />
        <TimesheetPreviewListItem startDate="10/05" status="Submitted" />
      </tbody>
    </Table>
  );
};
