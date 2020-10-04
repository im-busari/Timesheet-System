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
    dispatch(getAllProjects());
    dispatch(getTimesheetsForUser());
  }, [dispatch]);

  const timesheetIds = useSelector((state) => state.timesheets.ids);

  const error = useSelector((state) => state.timesheets.error);

  return (
    <Layout>
      {error & !error?.includes("404") ? (
        <div>
          <p>Seems like something has gone wrong.</p>
          <p>Our bad.</p>
        </div>
      ) : (
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
              {/*{timesheetIds.length ? <TimesheetPreview /> : <NoTimesheetMessage />*/}
              {/*timesheetIds.map((id) => (*/}
              {/*  <TimesheetListItem*/}
              {/*      timesheetId={id}*/}
              {/*  />*/}
              {/*)*/}
              {/*}*/}
              {/*/!*{allTimesheets}*!/*/}
            </tbody>
          </Table>
        </div>
      )}
    </Layout>
  );
};
