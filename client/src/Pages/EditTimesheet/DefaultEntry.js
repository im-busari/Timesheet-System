import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsTrash2Fill } from "react-icons/bs";
import { StyledCol, EntryRow } from "./EditTimesheetStyledComponents";
import { NumberInput } from "../../components/generic/NumberInput";
import { DeleteBtn } from "./EditTimesheetStyledComponents";
import { addEmptyEntry, updateDay } from "../../redux/slices/timesheet";
import { projects } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { ProjectOption } from "./components/ProjectOption";
import { format, addDays } from "date-fns";

export const DefaultEntry = ({ timesheetId }) => {
  const dispatch = useDispatch();
  const projectIds = useSelector((state) => state.projects.ids);

  const [project, setProject] = useState(null);

  const onChangeHandler = (e) => {
    const projectId = e.target.value;
    setProject(null);
    dispatch(addEmptyEntry({ timesheetId, projectId }));
  };

  return (
    <Row as={EntryRow}>
      <Col as={StyledCol}></Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        <select
          id="project"
          onChange={(event) => {
            onChangeHandler(event);
          }}
        >
          {project && <option selected>Select option</option>}
          {projectIds.map((id) => (
            <ProjectOption key={id} projectId={id} />
          ))}
        </select>
      </Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        <select id="task" disabled>
          <option value={"select task"} disabled hidden selected>
            Select task
          </option>
        </select>
      </Col>
      <Col as={StyledCol}>
        <NumberInput disabled />
      </Col>
      <Col as={StyledCol}>
        <NumberInput disabled />
      </Col>
      <Col as={StyledCol}>
        <NumberInput disabled />
      </Col>
      <Col as={StyledCol}>
        <NumberInput disabled />
      </Col>
      <Col as={StyledCol}>
        <NumberInput disabled />
      </Col>
      <Col as={StyledCol}>
        <NumberInput disabled />
      </Col>
      <Col as={StyledCol}>
        <NumberInput disabled />
      </Col>
      <Col as={StyledCol}></Col>
    </Row>
  );
};
