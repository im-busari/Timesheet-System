import React, { useState } from "react";
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

export const EditTimesheet = () => {
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
          <UserInfo>{`User: ___`}</UserInfo>
        </Information>

        <BtnsContainer>
          <Button backgroundColor="danger" text="Delete" />
          <Button backgroundColor="orange" text="Save" />
          <Button backgroundColor="green" text="Submit" />
        </BtnsContainer>
      </Header>

      <Container fluid>
        <TableHeader />

        {entries.map((entry) => (
          <Entry
            key={entry.id}
            entryId={entry.id}
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
