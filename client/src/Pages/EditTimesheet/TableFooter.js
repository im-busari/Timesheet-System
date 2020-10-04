import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { StyledCol, HeaderFooterRow } from "./EditTimesheetStyledComponents";
import { addDays, format } from "date-fns";

export const TableFooter = ({ entries, startDate }) => {
  const [hours, setHours] = useState({});
  const [day, month, year] = startDate.split("-");

  const formatDays = (increaseInt) => {
    return format(
      addDays(new Date(year, month - 1, day), increaseInt),
      "dd-MM-yyyy"
    );
  };

  const monday = formatDays(0);
  const tuesday = formatDays(1);
  const wednesday = formatDays(2);
  const thursday = formatDays(3);
  const friday = formatDays(4);
  const saturday = formatDays(5);
  const sunday = formatDays(6);

  useEffect(() => {
    setHours(() => {
      const newHours = {};

      entries.map((entry) => {
        for (const key in entry.days) {
          const day = entry.days[key].hours;

          if (!newHours[entry.days[key].date]) {
            newHours[entry.days[key].date] = 0;
          }
          if (isNaN(newHours["total"])) {
            newHours["total"] = 0;
          }

          newHours[entry.days[key].date] += day;
          newHours["total"] += day;
        }
      });
      return newHours;
    });
  }, [entries]);

  return (
    <Row as={HeaderFooterRow}>
      <Col as={StyledCol}></Col>
      <Col as={StyledCol} sm={3} md={3} lg={3} xl={3}></Col>
      <Col as={StyledCol}></Col>
      <Col as={StyledCol}>{hours[monday] !== 0 ? hours[monday] : null}</Col>
      <Col as={StyledCol}>{hours[tuesday] !== 0 ? hours[tuesday] : null}</Col>
      <Col as={StyledCol}>
        {hours[wednesday] !== 0 ? hours[wednesday] : null}
      </Col>
      <Col as={StyledCol}>{hours[thursday] !== 0 ? hours[thursday] : null}</Col>
      <Col as={StyledCol}>{hours[friday] !== 0 ? hours[friday] : null}</Col>
      <Col as={StyledCol}>{hours[saturday] !== 0 ? hours[saturday] : null}</Col>
      <Col as={StyledCol}>{hours[sunday] !== 0 ? hours[sunday] : null}</Col>
      <Col as={StyledCol}>{hours.total !== 0 ? hours.total : null}</Col>
    </Row>
  );
};
