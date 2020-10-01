import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StyledCol } from "./EditTimesheetStyledComponents";
import { OddRow } from "./EditTimesheetStyledComponents";
import { format } from "date-fns";

export const Head = () => {
  return (
    <Container fluid>
      <Row as={OddRow} style={{ minWidht: "1200px" }}>
        <Col as={StyledCol}></Col>
        <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
          Project
        </Col>
        <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
          Task
        </Col>
        <Col as={StyledCol}>{`Mon\n`}</Col>
        <Col as={StyledCol}>{`Tue\n`}</Col>
        <Col as={StyledCol}>{`Wed\n`}</Col>
        <Col as={StyledCol}>{`Thu\n`}</Col>
        <Col as={StyledCol}>{`Fri\n`}</Col>
        <Col as={StyledCol}>{`Sat\n`}</Col>
        <Col as={StyledCol}>{`Sun\n`}</Col>
        <Col as={StyledCol}>Total</Col>
      </Row>
    </Container>
  );
};
