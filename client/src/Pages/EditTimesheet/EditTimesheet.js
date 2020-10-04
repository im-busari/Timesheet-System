import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { deleteTimesheet, updateTimesheet } from "../../redux/slices/timesheet";

export const EditTimesheet = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
                onClick={() => {
                  console.log("DIspatch delete!");
                  dispatch(deleteTimesheet({ timesheetId }, history));
                }}
              />
              <Button
                backgroundColor="orange"
                text="Save"
                id="save"
                onClick={() => {
                  dispatch(
                    updateTimesheet({ currentTimesheet, submitted: false })
                  );
                  history.push("/");
                }}
              />
              <Button
                backgroundColor="green"
                text="Submit"
                onClick={() => {
                  dispatch(
                    updateTimesheet({ currentTimesheet, submitted: true })
                  );
                  history.push("/");
                }}
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
