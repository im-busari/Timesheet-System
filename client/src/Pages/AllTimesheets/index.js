import React, { useEffect } from "react";
import { Layout } from "../Layout";
import { TimesheetPreview } from "../../components/TimesheetPreview";
import { useDispatch, useSelector } from "react-redux";
import { getTimesheetsForUser } from "../../redux/slices/timesheet";
import { getAllProjects } from "../../redux/slices/project";
import { NoTimesheetMessage } from "../../components/NoTimesheetMessage";

export const AllTimesheetsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTimesheetsForUser());
    dispatch(getAllProjects());
  }, [dispatch]);

  const timesheets = useSelector((state) =>
    Object.values(state.timesheets.timesheets)
  );

  const error = useSelector((state) => state.timesheets.getError);

  return (
    <Layout>
      {error & !error?.includes("404") ? (
        <div>
          <p>Seems like something has gone wrong.</p>
          <p>Our bad.</p>
        </div>
      ) : (
        <div>
          {timesheets.length ? (
            <TimesheetPreview timesheets={timesheets} />
          ) : (
            <NoTimesheetMessage />
          )}
        </div>
      )}
    </Layout>
  );
};
