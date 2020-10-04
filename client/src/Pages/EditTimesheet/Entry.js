import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsTrash2Fill } from "react-icons/bs";
import { StyledCol, EntryRow } from "./EditTimesheetStyledComponents";
import { NumberInput } from "../../components/generic/NumberInput";
import { DeleteBtn } from "./EditTimesheetStyledComponents";
import {
  updateDay,
  updateProject,
  updateTask,
} from "../../redux/slices/timesheet";
import { projects } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { ProjectOption } from "./components/ProjectOption";
import { format, addDays } from "date-fns";

export const Entry = ({ timesheetId, entry, entryIndex, startDate }) => {
  const [day, month, year] = startDate.split("-");
  const dispatch = useDispatch();
  const projectIds = useSelector((state) => state.projects.ids);
  const [project, setProject] = useState(entry.data.projectId);
  const tasks = useSelector((state) => state.projects.byId[project]?.tasks);
  const [task, setTask] = useState(entry.data.taskId);

  const onChangeHandler = (e, dayDate) => {
    dispatch(
      updateDay({
        timesheetId,
        entryIndex,
        dayDate,
        hours: e.target.value,
      })
    );
  };

  const onProjectChange = (e) => {
    dispatch(
      updateProject({ projectId: e.target.value, entryIndex, timesheetId })
    );
  };

  const onTaskChange = (e) => {
    dispatch(updateTask({ taskId: e.target.value, entryIndex, timesheetId }));
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
            onProjectChange(event);
          }}
        >
          {!project && (
            <option disabled hidden selected>
              Select option
            </option>
          )}
          {projectIds.map((id) => (
            <ProjectOption key={id} projectId={id} selectedId={project} />
          ))}
        </select>
      </Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        <select
          id="task"
          onChange={(event) => {
            setTask(event.target.value);
            onTaskChange(event);
            // onChangeEntryData(event)
          }}
        >
          {!task && (
            <option disabled hidden selected>
              Select option
            </option>
          )}
          {tasks &&
            tasks.map((item) => (
              <option value={item.id} selected={item.id === task}>
                {item.name}
              </option>
            ))}
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
          onChange={(e) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 2),
              "dd-MM-yyyy"
            );
            onChangeHandler(e, dayDate);
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="thu"
          onChange={(e) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 3),
              "dd-MM-yyyy"
            );
            onChangeHandler(e, dayDate);
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="fri"
          onChange={(e) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 4),
              "dd-MM-yyyy"
            );
            onChangeHandler(e, dayDate);
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="sat"
          onChange={(e) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 5),
              "dd-MM-yyyy"
            );
            onChangeHandler(e, dayDate);
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="sun"
          onChange={(e) => {
            const dayDate = format(
              addDays(new Date(year, month - 1, day), 6),
              "dd-MM-yyyy"
            );
            onChangeHandler(e, dayDate);
            console.log(dayDate);
          }}
        />
      </Col>
      <Col as={StyledCol}></Col>
    </Row>
  );
};
