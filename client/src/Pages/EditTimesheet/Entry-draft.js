import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsTrash2Fill } from "react-icons/bs";
import { StyledCol, EntryRow } from "./EditTimesheetStyledComponents";
import { NumberInput } from "../../components/generic/NumberInput";
import { DeleteBtn } from "./EditTimesheetStyledComponents";
import { projects } from "../../api";
import { useSelector } from "react-redux";
import { ProjectOption } from "./components/ProjectOption";

// CURRENTLY NOT USING
export const Entry = ({
  entry,
  entryId,
  handleChange,
  addEmptyEntry,
  handleEntryDelete,
}) => {
  const projectIds = useSelector((state) => state.projects.ids);
  const [project, setProject] = useState(entry.data.projectId);
  const tasks = useSelector((state) => state.projects.byId[project]?.tasks);

  return (
    <Row as={EntryRow}>
      <Col as={StyledCol}>
        {project !== null && (
          <DeleteBtn onClick={() => handleEntryDelete(entryId)}>
            <BsTrash2Fill />
          </DeleteBtn>
        )}
      </Col>
      <Col as={StyledCol}>
        <select
          id="project"
          onChange={(event) => {
            addEmptyEntry(event, entryId);
            handleChange(event, entryId);
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
      <Col as={StyledCol}>
        <select id="task">
          {tasks &&
            tasks.map((task) => <option value={task.id}>{task.name}</option>)}
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
