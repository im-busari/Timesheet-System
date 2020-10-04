import React from "react";
import { TimesheetPreviewListItem } from "../TimesheetPreviewListItem";
import { Table } from "react-bootstrap";
import { TableHeader } from "./styles";
import { sortTimesheets } from "../../utils/sortTimesheets";
import { useDispatch, useSelector } from "react-redux";
import { deleteTimesheet } from "../../redux/slices/timesheet";
export const TimesheetPreview = ({ timesheets }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTimesheet({ id }));
  };
  const timesheetIds = useSelector((state) => state.timesheets.ids);
  const timesheet = useSelector((state) => state.timesheets.byId[timesheetIds]);

  // const allTimesheets = timesheets.sort(sortTimesheets).map((timesheet) => {
  //   return (
  //     <TimesheetPreviewListItem
  //       startDate={timesheet?.data?.startDate}
  //       status={timesheet?.data?.status}
  //       key={timesheet?.data?.id}
  //       timesheetId={timesheet?.data?.id}
  //       onDelete={handleDelete}
  //     />
  //   );
  // });

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
        <TimesheetPreviewListItem
          startDate={timesheet?.data?.startDate}
          status={timesheet?.data?.status}
          key={timesheet?.data?.id}
          timesheetId={timesheet?.data?.id}
          onDelete={handleDelete}
        />
        {/*{allTimesheets}*/}
      </tbody>
    </Table>
  );
};
