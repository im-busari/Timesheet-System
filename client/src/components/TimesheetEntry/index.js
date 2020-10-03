import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTimesheet } from "../../redux/slices/timesheet";

export const TimesheetEntry = ({
  timesheetId,
  entry,
  entryId,
  setProject,
  setTask,
}) => {
  const [days, setDays] = useState({});
  const handleChange = (e) => {
    const hours = e.target.value;
    const day = e.target.id;

    const newDay = {};
    newDay[day] = hours;

    setDays((currentDays) => ({ ...currentDays, newDay }));
  };

  const [entryProject, setEntryProject] = useState(null);

  const projects = useSelector((state) =>
    Object.values(state.projects.projects)
  );

  const allProjects = projects.map((project) => {
    <option
      key={project.id}
      value={entryProject.name}
      onChange={setEntryProject(e.target.value)}
    />;
  });

  const tasks = projects?.tasks;

  const allTasks = tasks.map((task) => {
    <option key={task.id} value={task.name} />;
  });

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(
      updateTimesheet({ id: timesheetId, entries: { projectId, days } })
    );
  };

  const { mon, tue, wed, thu, fri, sat, sun } = entry;
  const entryDays = { mon, tue, wed, thu, fri, sat, sun };
  const allDays = entryDays.map((day) => {
    <input
      key={day}
      id={day}
      value={days[day]}
      onChange={handleChange}
      onBlur={handleUpdate}
    />;
  });

  return (
    <>
      <div>
        <select onChange={setProject}>{allProjects}</select>
      </div>

      <div>
        <select onChange={setTask}>{allTasks}</select>
      </div>

      <div>{allDays}</div>
    </>
  );
};
