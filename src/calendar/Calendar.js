import React from 'react';
import { Container, Header } from 'semantic-ui-react'

import MonthView from './MonthView';

const Calendar = () => (
  <Container style={{ padding: '2em 0em' }}>
    <Header>
      August
    </Header>
    <MonthView />
  </Container>
);

export default Calendar;