import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  BtnsContainer,
  Header,
  Information,
  MainContainer,
  UserInfo,
  WeekInfo,
} from "./EditTimesheetStyledComponents";
import { Button } from "../../components/generic/Button";
import { Container } from "react-bootstrap";
import { TableHeader } from "./TableHeader";
import { Entry } from "./Entry";
import { TableFooter } from "./TableFooter";
import { DefaultContext } from "react-icons";
import { DefaultEntry } from "./DefaultEntry";

export const EditTimesheet = () => {
  const history = useHistory();
  const loggedUserId = useSelector((state) => state.auth.userId);
  const loggedUser = useSelector(
    (state) => state.users.usersById[loggedUserId]
  );

  const { timesheetId } = useParams();
  const currentTimesheet = useSelector(
    (state) => state.timesheets.byId[timesheetId]
  );
  const currentEntries = useSelector(
    (state) => state.timesheets.byId[timesheetId]?.entries
  );
  // console.log(currentTimesheet);

  // entry.data
  // entry.days => another for each loop -> fix seeders days date ---- TODO:

  if (currentEntries) {
    currentEntries.forEach((entry) => {
      console.log(entry.data);
    });
  }

  //    list entries from state
  // edit (small button) form => project on change add new entry to state with given projectId
  //
  return (
    <>
      {timesheetId && (
        <MainContainer>
          <Header>
            <Information>
              <WeekInfo>{`Timesheet for week ${currentTimesheet.data.startDate
                .split("-")
                .join(".")}`}</WeekInfo>
              <UserInfo>{`User: ${loggedUser.username}`}</UserInfo>
            </Information>

            <BtnsContainer>
              <Button
                backgroundColor="danger"
                text="Delete"
                id="delete"
                onClick={() => console.log("Delete")}
              />
              <Button
                backgroundColor="orange"
                text="Save"
                id="save"
                onClick={() => console.log("Save")}
              />
              <Button
                backgroundColor="green"
                text="Submit"
                onClick={() => console.log("Submit")}
              />
            </BtnsContainer>
          </Header>
          <Container fluid>
            <TableHeader startDate={currentTimesheet.data.startDate} />
            {/*    need to get date from header and pass it to state */}
            {currentTimesheet &&
              currentTimesheet.entries.map((entry, index) => (
                <Entry
                  key={index}
                  timesheetId={timesheetId}
                  entryIndex={index}
                  entry={entry}
                  startDate={currentTimesheet.data.startDate}
                />
              ))}
            <DefaultEntry timesheetId={timesheetId} />
            {/*<TableFooter entries={currentTimesheet?.entries?.days} />*/}
          </Container>
        </MainContainer>
      )}
    </>
  );
};
