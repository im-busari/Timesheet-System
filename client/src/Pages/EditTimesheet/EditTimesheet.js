import React from "react";
import {
  MainContainer,
  OddRow,
  EvenRow,
  StyledCol,
  StyledInput,
} from "./EditTimesheetStyledComponents";
import { Container, Row, Col } from "react-bootstrap";
import { format } from "date-fns";
import { BsTrash2Fill } from "react-icons/bs";
import { Head } from "./Head";

export const EditTimesheet = () => {
  const date = new Date();
  console.log(format(date, "dd-MM"));

  return (
    <MainContainer>
      <Container fluid>
        <Row as={OddRow} style={{ minWidht: "1200px" }}>
          <Col as={StyledCol}></Col>
          <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
            Project
          </Col>
          <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
            Task
          </Col>
          <Col as={StyledCol}>{`${format(date, "EEE")}\n${format(
            date,
            "dd.MM"
          )}`}</Col>
          <Col as={StyledCol}>{`${format(date, "EEE")}\n${format(
            date,
            "dd.MM"
          )}`}</Col>
          <Col as={StyledCol}>{`${format(date, "EEE")}\n${format(
            date,
            "dd.MM"
          )}`}</Col>
          <Col as={StyledCol}>{`${format(date, "EEE")}\n${format(
            date,
            "dd.MM"
          )}`}</Col>
          <Col as={StyledCol}>{`${format(date, "EEE")}\n${format(
            date,
            "dd.MM"
          )}`}</Col>
          <Col as={StyledCol}>{`${format(date, "EEE")}\n${format(
            date,
            "dd.MM"
          )}`}</Col>
          <Col as={StyledCol}>{`${format(date, "EEE")}\n${format(
            date,
            "dd.MM"
          )}`}</Col>
          <Col as={StyledCol}>Total</Col>
        </Row>

        <Row as={EvenRow} style={{ minWidht: "1200px" }}>
          <Col as={StyledCol}>
            <BsTrash2Fill />
          </Col>
          <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
            <select>
              <option selected disabled hidden>
                Choose project...
              </option>
              <option>Project One</option>
              <option>Project Two</option>
              <option>Project Three</option>
            </select>
          </Col>
          <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
            <select>
              <option selected disabled hidden>
                Choose task...
              </option>
              <option>Task One</option>
              <option>Task Two</option>
              <option>Task Three</option>
            </select>
          </Col>
          <Col as={StyledCol}>
            <StyledInput />
          </Col>
          <Col as={StyledCol}>
            <StyledInput />
          </Col>
          <Col as={StyledCol}>
            <StyledInput />
          </Col>
          <Col as={StyledCol}>
            <StyledInput />
          </Col>
          <Col as={StyledCol}>
            <StyledInput />
          </Col>
          <Col as={StyledCol}>
            <StyledInput />
          </Col>
          <Col as={StyledCol}>
            <StyledInput />
          </Col>
          <Col as={StyledCol}>
            <StyledInput />
          </Col>
        </Row>

        <Row as={OddRow} style={{ minWidht: "1200px" }}>
          <Col as={StyledCol}>
            <BsTrash2Fill />
          </Col>
          <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}></Col>
          <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}></Col>
          <Col as={StyledCol}></Col>
          <Col as={StyledCol}></Col>
          <Col as={StyledCol}></Col>
          <Col as={StyledCol}></Col>
          <Col as={StyledCol}></Col>
          <Col as={StyledCol}></Col>
          <Col as={StyledCol}></Col>
          <Col as={StyledCol}></Col>
        </Row>
      </Container>
    </MainContainer>
  );
};
