import React from 'react';
import { Table } from 'semantic-ui-react'
import _ from 'lodash';

const DayLabels = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
const DaysOfWeekCells = DayLabels.map((s) => (<Table.HeaderCell> {s} </Table.HeaderCell>)) 

const MonthHeader = () => (
  <Table.Header>
    <Table.Row>
      { DaysOfWeekCells }
    </Table.Row>
  </Table.Header>
);

const WeekRow = (startDay, lastDay, offset = 0) => {
  const dayFn = (day) => (<Table.Cell> {day <= lastDay ? day : null} </Table.Cell>);
  let DayCells;

  if (offset == 0) {
    DayCells = _.range(startDay, startDay + 7).map(dayFn);
  } else {
    DayCells = _.range(offset).map(() => <Table.Cell/>).concat(_.range(startDay, startDay + 7 - offset).map(dayFn));
  }
  
  return (
    <Table.Row>
      {DayCells}
    </Table.Row>
  );
};

const WeekRows = (lastDay, offset) => {
  let rows = [ WeekRow(1, lastDay, offset) ];
  let startDay = 1 - offset;
  do {
    startDay += 7;
    rows.push( WeekRow(startDay, lastDay) );
  } while (startDay + 7 <= lastDay);

  return rows;
}

const MonthView = () => (
  <Table fixed celled singleLine>
    <MonthHeader />

    <Table.Body>
      { WeekRows(31, 3) }
    </Table.Body>
  </Table>
);

export default MonthView;