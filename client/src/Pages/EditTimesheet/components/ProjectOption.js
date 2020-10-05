import { useSelector } from "react-redux";
import React from "react";

const ProjectOption = ({ projectId, selectedId }) => {
  const projectName = useSelector((state) => state.projects.byId[projectId]);

  return (
    <option value={projectId} selected={projectId === selectedId}>
      {projectName.name}
    </option>
  );
};

export { ProjectOption };
