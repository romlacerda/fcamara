import React from 'react';
import {
  Paper,
} from '@material-ui/core';
import { Container } from '../../components/Container/style';
import MessageForm from '../../components/Form';

export default () => (
  <Container>
    <Paper style={{ flex: 1, marginTop: '1em' }}>
      <MessageForm />
    </Paper>
  </Container>
);
