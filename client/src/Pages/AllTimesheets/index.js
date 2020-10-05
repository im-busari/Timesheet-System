import React, { useEffect } from "react";
import { Layout } from "../Layout";
import { TimesheetPreview } from "../../components/TimesheetPreview-to-remove";
import { useDispatch, useSelector } from "react-redux";
import { getTimesheetsForUser } from "../../redux/slices/timesheet";
import { getAllProjects } from "../../redux/slices/project";
import { NoTimesheetMessage } from "../../components/NoTimesheetMessage";
import { TableHeader } from "../../components/TimesheetPreview-to-remove/styles";
import { TimesheetListItem } from "../../components/TimesheetListItem";
import { Table } from "react-bootstrap";

export const AllTimesheetsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimesheetsForUser());
    dispatch(getAllProjects());
  }, [dispatch]);

  const timesheetIds = useSelector((state) => state.timesheets.ids);

  useEffect(() => {
    dispatch(getTimesheetsForUser());
  }, [dispatch, timesheetIds]);

  return (
    <Layout>
      {timesheetIds.length ? (
        <div>
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
              {timesheetIds.map((id) => (
                <TimesheetListItem key={id} timesheetId={id} />
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <NoTimesheetMessage />
      )}
    </Layout>
  );
};
