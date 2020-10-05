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
  deleteTimesheetEntry,
} from "../../redux/slices/timesheet";
import { projects } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { ProjectOption } from "./components/ProjectOption";
import { format, addDays } from "date-fns";
import { isInteger } from "formik";
import uuid from "react-uuid";
import { DismissibleAlert } from "../../components/DismissibleAlert";

export const Entry = ({
  disabled,
  timesheetId,
  entry,
  entryIndex,
  startDate,
}) => {
  const [day, month, year] = startDate.split("-");
  const dispatch = useDispatch();
  const projectIds = useSelector((state) => state.projects.ids);
  const [project, setProject] = useState(entry.data.projectId);
  const tasks = useSelector((state) => state.projects.byId[project]?.tasks);
  const [task, setTask] = useState(entry.data.taskId);

  const dateObj = entry.days.reduce((acc, current) => {
    startDate = current.date;
    acc[startDate] = current.hours;
    return acc;
  }, {});
  // console.log(dateObj);

  const formatDays = (increaseInt) => {
    return format(
      addDays(new Date(year, month - 1, day), increaseInt),
      "dd-MM-yyyy"
    );
  };

  const monday = formatDays(0);
  const tuesday = formatDays(1);
  const wednesday = formatDays(2);
  const thursday = formatDays(3);
  const friday = formatDays(4);
  const saturday = formatDays(5);
  const sunday = formatDays(6);

  const onChangeHandler = (e, dayDate) => {
    if (!isInteger(e.target.value)) {
      e.target.value = null;
      console.log("Inside func", typeof e.target.value);
    }

    if (e.target.value < 0.25 || e.target.value > 24) {
      e.target.value = null;
    }

    const hours = +e.target.value;
    dispatch(
      updateDay({
        timesheetId,
        entryIndex,
        dayDate,
        hours,
      })
    );
  };

  useEffect(() => {
    console.log(entryIndex);
  }, [entryIndex]);

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
        {project !== null && !disabled && (
          <DeleteBtn
            onClick={() => {
              dispatch(
                deleteTimesheetEntry({
                  entryId: entry.data.id,
                  project,
                  task,
                  entryIndex: entry.index,
                  timesheetId,
                })
              );
            }}
          >
            <BsTrash2Fill />
          </DeleteBtn>
        )}
      </Col>
      <Col as={StyledCol} sm={3} md={3} lg={3} xl={3}>
        <select
          style={{
            width: "85%",
            overflow: "hidden",
            whiteSpace: "pre",
            textOverflow: "ellipsis",
          }}
          id="project"
          disabled={disabled}
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
          }
        </select>
      </Col>
      <Col as={StyledCol}>
        <select
          style={{
            width: "100%",
            overflow: "hidden",
            whiteSpace: "pre",
            textOverflow: "ellipsis",
          }}
          disabled={disabled}
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
              <option key={item.id} value={item.id} selected={item.id === task}>
                {item.name}
              </option>
            ))}
        </select>
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="mon"
          disabled={disabled}
          defaultValue={dateObj[monday]}
          onChange={(event) => {
            onChangeHandler(event, monday);
            console.log(monday);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="tue"
          disabled={disabled}
          defaultValue={dateObj[tuesday]}
          onChange={(event) => {
            onChangeHandler(event, tuesday);
            console.log(tuesday);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="wed"
          disabled={disabled}
          defaultValue={dateObj[wednesday]}
          onChange={(event) => {
            onChangeHandler(event, wednesday);
            console.log(wednesday);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="thu"
          disabled={disabled}
          defaultValue={dateObj[thursday]}
          onChange={(event) => {
            onChangeHandler(event, thursday);
            console.log(thursday);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="fri"
          disabled={disabled}
          defaultValue={dateObj[friday]}
          onChange={(event) => {
            onChangeHandler(event, friday);
            console.log(friday);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="sat"
          disabled={disabled}
          defaultValue={dateObj[saturday]}
          onChange={(event) => {
            onChangeHandler(event, saturday);
            console.log(saturday);
          }}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="sun"
          disabled={disabled}
          defaultValue={dateObj[sunday]}
          onChange={(event) => {
            onChangeHandler(event, sunday);
            console.log(sunday);
          }}
        />
      </Col>
      <Col as={StyledCol}></Col>
    </Row>
  );
};
