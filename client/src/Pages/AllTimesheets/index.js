import React, { useEffect } from "react";
import { Layout } from "../Layout";
import { TimesheetPreview } from "../../components/TimesheetPreview";
import { useDispatch, useSelector } from "react-redux";
import { getTimesheetsForUser } from "../../redux/slices/timesheet";
import { getAllProjects } from "../../redux/slices/project";

export const AllTimesheetsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTimesheetsForUser());
    dispatch(getAllProjects());
  }, [dispatch]);

  const timesheets = useSelector((state) =>
    Object.values(state.timesheets?.timesheets)
  );

  return (
    <Layout>
      <div>
        <TimesheetPreview timesheets={timesheets} />
      </div>
    </Layout>
  );
};
