import { useSelector } from "react-redux";
import React from "react";

const TaskOption = ({ projectId, selectedId }) => {
  const taskName = useSelector((state) => state.tasks.byId[projectId]);

  return <option value={projectId}>{projectName.name}</option>;
};

export { TaskOption };
