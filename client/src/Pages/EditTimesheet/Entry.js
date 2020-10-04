import React, { useEffect, useState } from "react";
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
  const [project, setProject] = useState(null);
  const tasks = useSelector((state) => state.projects.byId[project]?.tasks);
  const [task, setTask] = useState(null);

  useEffect(() => {
    console.log(tasks);
  }, [project, dispatch]);

  const onChangeHandler = (e, dayDate = false, localProject, localTask) => {
    // console.log(e.target.value);
    let hours = false;

    if (typeof e?.target?.value === "number") {
      hours = e?.target?.value;
    }
    dispatch(
      updateDay({
        timesheetId,
        entryIndex,
        dayDate,
        hours: hours,
        taskId: localTask,
        projectId: localProject,
      })
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
            onChangeHandler(event, false, event.target.value, tasks[0]);
          }}
        >
          <option disabled hidden selected>
            Select option
          </option>
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
        <select
          id="task"
          onChange={(event) => {
            setTask(event.target.value);
            onChangeHandler(event, false, project, event.target.value);
          }}
        >
          <option value={"select task"} disabled hidden selected>
            Select task
          </option>
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
