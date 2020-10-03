import React, { useState, useEffect } from "react";
import {
  MainContainer,
  Header,
  Information,
  WeekInfo,
  UserInfo,
  BtnsContainer,
} from "./EditTimesheetStyledComponents";
import { Button } from "../../components/generic/Button";
import { Container } from "react-bootstrap";
import { TableHeader } from "./TableHeader";
import { TableFooter } from "./TableFooter";
import { Entry } from "./Entry";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTimesheetsForUser } from "../../redux/slices/timesheet";

export const EditTimesheet = () => {
  const dispatch = useDispatch();
  const loggedUserId = useSelector((state) => state.auth.userId);
  const loggedUser = useSelector(
    (state) => state.users.usersById[loggedUserId]
  );

  const { timesheetId } = useParams();
  const currentTimesheet = useSelector(
    (state) => state.timesheets.timesheets[timesheetId]
  );

  useEffect(() => {
    dispatch(getTimesheetsForUser());
  }, [dispatch]);

  const [entries, setEntries] = useState([
    {
      id: uuid(),
      project: null,
      task: null,
      mon: 0,
      tue: 0,
      wed: 0,
      thu: 0,
      fri: 0,
      sat: 0,
      sun: 0,
    },
  ]);

  const addEmptyEntry = (event, entryId) => {
    event.persist();

    entries.forEach((entry) => {
      if (entry.id === entryId && entry.project === null) {
        setEntries((prevState) => {
          return [
            ...prevState,
            {
              id: uuid(),
              project: null,
              task: null,
              mon: 0,
              tue: 0,
              wed: 0,
              thu: 0,
              fri: 0,
              sat: 0,
              sun: 0,
            },
          ];
        });
      }
    });
  };

  const handleChange = (event, entryId) => {
    const { id, value } = event.target;

    /* Handles the change of a project */
    if (id === "project") {
      setEntries((prevState) => {
        return prevState.map((entry) => {
          if (entry.id === entryId) {
            return { ...entry, project: event.target.value };
          } else {
            return entry;
          }
        });
      });
      /* Handles the change of a task */
    } else if (id === "task") {
      setEntries((prevState) => {
        return prevState.map((entry) => {
          if (entry.id === entryId) {
            return { ...entry, task: event.target.value };
          } else {
            return entry;
          }
        });
      });
      /* Handles the change of work hours */
    } else {
      setEntries((prevState) => {
        return prevState.map((entry) => {
          if (entry.id === entryId) {
            if (!isNaN(parseInt(value))) {
              return { ...entry, [id]: parseInt(value) };
            } else {
              return { ...entry, [id]: 0 };
            }
          } else {
            return entry;
          }
        });
      });
    }
  };

  const handleEntryDelete = (entryId) => {
    if (entries.length > 1) {
      setEntries((prevState) =>
        prevState.filter((entry) => entry.id !== entryId)
      );
    }
  };

  return (
    <MainContainer>
      <Header>
        <Information>
          <WeekInfo>{`Timesheet for week ___`}</WeekInfo>
          <UserInfo>{`User: ${loggedUser.username}`}</UserInfo>
        </Information>

        <BtnsContainer>
          <Button backgroundColor="danger" text="Delete" />
          <Button backgroundColor="orange" text="Save" />
          <Button backgroundColor="green" text="Submit" />
        </BtnsContainer>
      </Header>

      <Container fluid>
        <TableHeader />

        {currentTimesheet &&
          currentTimesheet.entries.map((entry) => (
            <Entry
              key={entry.data.id}
              entryId={entry.data.id}
              entry={entry}
              addEmptyEntry={addEmptyEntry}
              handleChange={handleChange}
              handleEntryDelete={handleEntryDelete}
            />
          ))}

        <TableFooter entries={entries} />
      </Container>
    </MainContainer>
  );
};
