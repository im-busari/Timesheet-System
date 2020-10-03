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
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        Project
      </Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        Task
      </Col>
      <Col as={StyledCol}>{`Mon\n${format(
        new Date(year, month - 1, day),
        "dd.MM"
      )}`}</Col>
      <Col as={StyledCol}>{`Tue\n${format(
        addDays(new Date(year, month - 1, day), 1),
        "dd.MM"
      )}`}</Col>
      <Col as={StyledCol}>{`Wed\n${format(
        addDays(new Date(year, month - 1, day), 2),
        "dd.MM"
      )}`}</Col>
      <Col as={StyledCol}>{`Thu\n${format(
        addDays(new Date(year, month - 1, day), 3),
        "dd.MM"
      )}`}</Col>
      <Col as={StyledCol}>{`Fri\n${format(
        addDays(new Date(year, month - 1, day), 4),
        "dd.MM"
      )}`}</Col>
      <Col as={StyledCol}>{`Sat\n${format(
        addDays(new Date(year, month - 1, day), 5),
        "dd.MM"
      )}`}</Col>
      <Col as={StyledCol}>{`Sun\n${format(
        addDays(new Date(year, month - 1, day), 6),
        "dd.MM"
      )}`}</Col>
      <Col as={StyledCol}>Total</Col>
    </Row>
  );
};
