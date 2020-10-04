import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsTrash2Fill } from "react-icons/bs";
import { StyledCol, EntryRow } from "./EditTimesheetStyledComponents";
import { NumberInput } from "../../components/generic/NumberInput";
import { DeleteBtn } from "./EditTimesheetStyledComponents";
import { updateDay } from "../../redux/slices/timesheet";
import { projects } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { ProjectOption } from "./components/ProjectOption";
import { format, addDays } from "date-fns";

export const Entry = ({
  timesheetId,
  entry,
  entryId,
  entryIndex,
  startDate,
}) => {
  const [day, month, year] = startDate.split("-");
  const dispatch = useDispatch();
  const projectIds = useSelector((state) => state.projects.ids);
  const [project, setProject] = useState(entry.data.projectId);
  const tasks = useSelector((state) => state.projects.byId[project]?.tasks);

  const onChangeHandler = (e, dayDate) => {
    console.log(e.target.value);
    dispatch(
      updateDay({ timesheetId, entryIndex, dayDate, hours: e.target.value })
    );
  };

  return (
    <Row as={EntryRow}>
      <Col as={StyledCol}>
        {project !== null && (
          <DeleteBtn onClick={() => console.log("Delete Btb")}>
            <BsTrash2Fill />
          </DeleteBtn>
        )}
      </Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        <select
          id="project"
          onChange={(event) => {
            setProject(event.target.value);
          }}
        >
          {projectIds.map((id) => (
            <ProjectOption
              key={id}
              projectId={id}
              selectedId={entry.projectId}
            />
          ))}
        </select>
      </Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        <select id="task">
          {tasks &&
            tasks.map((task) => <option value={task.id}>{task.name}</option>)}
        </select>
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="mon"
          onChange={(event) => {
            const dayDate = format(
              new Date(year, month - 1, day),
              "dd-MM-yyyy"
            );
            onChangeHandler(event, dayDate);
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="tue"
          onChange={(e) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 1),
              "dd-MM-yyyy"
            );
            onChangeHandler(e, dayDate);
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="wed"
          onChange={(event) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 2),
              "dd-MM-yyyy"
            );
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="thu"
          onChange={(event) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 3),
              "dd-MM-yyyy"
            );
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="fri"
          onChange={(event) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 4),
              "dd-MM-yyyy"
            );
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="sat"
          onChange={(event) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 5),
              "dd-MM-yyyy"
            );
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="sun"
          onChange={(event) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 6),
              "dd-MM-yyyy"
            );
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}></Col>
    </Row>
  );
};
