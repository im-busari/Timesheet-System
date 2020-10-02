import React from "react";
import { Row, Col } from "react-bootstrap";
import { StyledCol } from "./EditTimesheetStyledComponents";
import { HeaderFooterRow } from "./EditTimesheetStyledComponents";
import { format } from "date-fns";

export const TableHeader = () => {
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
      <Col as={StyledCol}>{`Mon\n${format(date, "dd.MM")}`}</Col>
      <Col as={StyledCol}>{`Tue\n${format(date, "dd.MM")}`}</Col>
      <Col as={StyledCol}>{`Wed\n${format(date, "dd.MM")}`}</Col>
      <Col as={StyledCol}>{`Thu\n${format(date, "dd.MM")}`}</Col>
      <Col as={StyledCol}>{`Fri\n${format(date, "dd.MM")}`}</Col>
      <Col as={StyledCol}>{`Sat\n${format(date, "dd.MM")}`}</Col>
      <Col as={StyledCol}>{`Sun\n${format(date, "dd.MM")}`}</Col>
      <Col as={StyledCol}>Total</Col>
    </Row>
  );
};
