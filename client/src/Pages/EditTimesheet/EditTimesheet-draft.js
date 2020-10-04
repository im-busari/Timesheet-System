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
import { useParams, useHistory } from "react-router-dom";
import {
  addEmptyEntry,
  clearCurrentTimesheet,
  deleteTimesheet,
  getTimesheetById,
  getTimesheetsForUser,
} from "../../redux/slices/timesheet";
import { Formik, Form, Field, FieldArray } from "formik";
import { getAllProjects } from "../../redux/slices/project";

export const EditTimesheet = () => {
  const dispatch = useDispatch();
  const { timesheetId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const authUserId = useSelector((state) => state.auth.userId);
  const authUserName = useSelector(
    (state) => state.users.usersById[authUserId]?.username
  );

  const currentTimesheet = useSelector(
    (state) => state.timesheets.byId[timesheetId]
  );
  console.log(currentTimesheet);

  const currentTimesheetEntries = useSelector(
    (state) => state.timesheets.byId[timesheetId]?.entries
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await getTimesheetsForUser()(dispatch);
      dispatch(getAllProjects());
      setIsLoading(false);
    })();

    return () => dispatch(clearCurrentTimesheet());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!currentTimesheetEntries?.length) {
  //     dispatch(addEmptyEntry({ timesheetId }));
  //   }
  // }, [currentTimesheetEntries, dispatch]);

  // const addNewEntry = (event, entryId) => {
  // 	event.persist();
  // 	dispatch(addEmptyEntry({timesheetId}))
  // }

  //  TODO: Learn why is this
  function addNewEntry(event) {
    event.persist();
    dispatch(addEmptyEntry({ timesheetId }));
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {currentTimesheet && (
        <MainContainer>
          <Header>
            <Information>
              <WeekInfo>{`Timesheet for week ${currentTimesheet.data.startDate
                .split("-")
                .join(".")}`}</WeekInfo>
              <UserInfo>{`User: ${authUserName}`}</UserInfo>
            </Information>

            <BtnsContainer>
              <Button
                backgroundColor="danger"
                text="Delete"
                id="delete"
                onClick={() => {}}
              />
              <Button backgroundColor="orange" text="Save" id="save" />
              <Button backgroundColor="green" text="Submit" />
            </BtnsContainer>
          </Header>
          <TableHeader startDate={currentTimesheet.data.startDate} />

          <Formik initialValues={currentTimesheet}>
            {({ values }) => {
              console.log("values", values);

              return (
                <Form>
                  <Container fluid>
                    {currentTimesheetEntries && (
                      <FieldArray name="entries">
                        {(arrayHelpers) => {
                          return currentTimesheetEntries.map((entry) => {
                            console.log(entry.data.id);
                            return (
                              <Entry
                                key={entry.data.id}
                                entryId={entry.data.id}
                                entry={entry}
                                handleChange={() => {}}
                                handleEntryDelete={() => {}}
                                addEmptyEntry={addNewEntry}
                              />
                            );
                          });
                        }}
                      </FieldArray>
                    )}
                  </Container>
                </Form>
              );
            }}
          </Formik>
        </MainContainer>
      )}
    </>
  );
};
