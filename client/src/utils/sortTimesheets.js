export function sortTimesheets(firstTimesheet, secondTimesheet) {
  const [dateFirst, monthFirst] = firstTimesheet.data.startDate.split("-");
  const [dateSecond, monthSecond] = secondTimesheet.data.startDate.split("-");

  if (monthFirst !== monthSecond) {
    return monthFirst - monthSecond;
  } else {
    return dateFirst - dateSecond;
  }
}
