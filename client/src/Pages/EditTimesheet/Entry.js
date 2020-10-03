import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsTrash2Fill } from "react-icons/bs";
import { StyledCol, EntryRow } from "./EditTimesheetStyledComponents";
import { NumberInput } from "../../components/generic/NumberInput";
import { DeleteBtn } from "./EditTimesheetStyledComponents";
import { projects } from "../../api";

export const Entry = ({
  entry,
  entryId,
  handleChange,
  addEmptyEntry,
  handleEntryDelete,
}) => {
  const [project, setProject] = useState(null);

  // const { projectId } = entry.data
  // const { taskId } = entry.data

  // const getProjectNameAndTaskName = async (projectId, taskId) => {
  //   const project = await projects.get.projectById(projectId)
  //   const task = project.projects.tasks.filter(p => p.id === taskId)

  //   return {
  //     project: project.projects.name,
  //     task: task[0].name
  //   }
  // }

  return (
    <Row as={EntryRow}>
      <Col as={StyledCol}>
        {project !== null && (
          <DeleteBtn onClick={() => handleEntryDelete(entryId)}>
            <BsTrash2Fill />
          </DeleteBtn>
        )}
      </Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        <select
          id="project"
          onChange={(event) => {
            addEmptyEntry(event, entryId);
            handleChange(event, entryId);
            setProject(event.target.value);
          }}
        >
          <option selected disabled hidden>
            Enter project....
          </option>
          <option value="Project one">Project One</option>
          <option value="project two">Project Two</option>
          <option value="project three">Project Three</option>
        </select>
      </Col>
      <Col as={StyledCol} sm={2} md={2} lg={2} xl={2}>
        <select id="task">
          <option selected disabled hidden>
            Choose task...
          </option>
          <option value="task one">Task One</option>
          <option value="task two">Task Two</option>
          <option value="task three">Task Three</option>
        </select>
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="mon"
          onChange={(event) => handleChange(event, entryId)}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="tue"
          onChange={(event) => handleChange(event, entryId)}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="wed"
          onChange={(event) => handleChange(event, entryId)}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="thu"
          onChange={(event) => handleChange(event, entryId)}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="fri"
          onChange={(event) => handleChange(event, entryId)}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="sat"
          onChange={(event) => handleChange(event, entryId)}
        />
      </Col>
      <Col as={StyledCol}>
        <NumberInput
          id="sun"
          onChange={(event) => handleChange(event, entryId)}
        />
      </Col>
      <Col as={StyledCol}></Col>
    </Row>
  );
};
