import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { StyledCol, HeaderFooterRow } from "./EditTimesheetStyledComponents";

export const TableFooter = ({ entries, startDate }) => {
  const [hours, setHours] = useState({
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    total: 0,
  });

  useEffect(() => {
    setHours(() => {
      const newHours = {};

      entries.map((entry) => {
        for (const key in entry) {
          const keysToIgnore = ["id", "project", "task"];

          if (!keysToIgnore.includes(key.toString())) {
            if (!newHours[key]) {
              newHours[key] = 0;
            }
            if (isNaN(newHours["total"])) {
              newHours["total"] = 0;
            }

            newHours[key] += entry[key];
            newHours["total"] += entry[key];
          }
        }
      });
      return newHours;
    });
  }, [entries]);

  return (
    <Row as={HeaderFooterRow}>
      <Col as={StyledCol}></Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}></Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}></Col>
      <Col as={StyledCol}>{hours.mon !== 0 ? hours.mon : null}</Col>
      <Col as={StyledCol}>{hours.tue !== 0 ? hours.tue : null}</Col>
      <Col as={StyledCol}>{hours.wed !== 0 ? hours.wed : null}</Col>
      <Col as={StyledCol}>{hours.thu !== 0 ? hours.thu : null}</Col>
      <Col as={StyledCol}>{hours.fri !== 0 ? hours.fri : null}</Col>
      <Col as={StyledCol}>{hours.sat !== 0 ? hours.sat : null}</Col>
      <Col as={StyledCol}>{hours.sun !== 0 ? hours.sun : null}</Col>
      <Col as={StyledCol}>{hours.total !== 0 ? hours.total : null}</Col>
    </Row>
  );
};
