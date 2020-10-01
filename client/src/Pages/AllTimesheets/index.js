import React from "react";
import { Layout } from "../Layout";
import { TimesheetPreview } from "../../components/TimesheetPreview";

export const AllTimesheetsPage = () => {
  return (
    <Layout>
      <div>
        <TimesheetPreview />
      </div>
    </Layout>
  );
};
