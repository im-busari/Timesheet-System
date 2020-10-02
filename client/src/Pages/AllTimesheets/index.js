import React, { useEffect } from "react";
import { Layout } from "../Layout";
import { TimesheetPreview } from "../../components/TimesheetPreview";
import { useDispatch } from "react-redux";
import { getTimesheetsForUser } from "../../redux/slices/timesheet";

export const AllTimesheetsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTimesheetsForUser());
  }, [dispatch]);

  return (
    <Layout>
      <div>
        <TimesheetPreview />
      </div>
    </Layout>
  );
};
