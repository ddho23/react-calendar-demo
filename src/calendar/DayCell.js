import React from 'react';
import { Table, Label, Segment } from 'semantic-ui-react'
import { isNullOrUndefined } from 'util';

const DayCell = ({ day, items = ['test'] }) => {

  const label = (() => {
    if (day == null) {
      return null;
    }
    return <Label> {day} </Label>;
  })();

  const itemsView = items.map((item) => <Segment padded={false}>{item}</Segment>);

  return (
    <Table.Cell>
      {label}
      {itemsView}
    </Table.Cell>
  );
};

export default DayCell;