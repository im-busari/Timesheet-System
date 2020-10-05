import React from "react";
import { Row, Col } from "react-bootstrap";
import { StyledCol } from "./EditTimesheetStyledComponents";
import { HeaderFooterRow } from "./EditTimesheetStyledComponents";
import { format, addDays } from "date-fns";

export const TableHeader = ({ startDate }) => {
  const [day, month, year] = startDate.split("-");

  const date = new Date();
  return (
    <Row as={HeaderFooterRow}>
      <Col as={StyledCol}></Col>
      <Col as={StyledCol} sm={3} md={3} lg={3} xl={3}>
        Project
      </Col>
      <Col as={StyledCol}>Task</Col>
      <Col as={StyledCol}>
        {"Mon"} <br /> {format(new Date(year, month - 1, day), "dd.MM")}
      </Col>
      <Col as={StyledCol}>
        {"Tue"}
        <br />
        {format(addDays(new Date(year, month - 1, day), 1), "dd.MM")}{" "}
      </Col>
      <Col as={StyledCol}>
        {"Wen"}
        <br />
        {format(addDays(new Date(year, month - 1, day), 2), "dd.MM")}{" "}
      </Col>
      <Col as={StyledCol}>
        {"Thu"}
        <br />
        {format(addDays(new Date(year, month - 1, day), 3), "dd.MM")}{" "}
      </Col>
      <Col as={StyledCol}>
        {"Fri"}
        <br />
        {format(addDays(new Date(year, month - 1, day), 4), "dd.MM")}{" "}
      </Col>
      <Col as={StyledCol}>
        {"Sat"}
        <br />
        {format(addDays(new Date(year, month - 1, day), 5), "dd.MM")}{" "}
      </Col>
      <Col as={StyledCol}>
        {"Sun"}
        <br />
        {format(addDays(new Date(year, month - 1, day), 6), "dd.MM")}{" "}
      </Col>
      <Col as={StyledCol}>Total</Col>
    </Row>
  );
};
