import React from 'react';
import {
  Paper,
} from '@material-ui/core';
import { Container } from '../../components/Container/style';
import MessageForm from '../../components/Form';
import { insertMessage, getSubjects } from '../../services/api';

const initialValues = {
  name: '', email: '', phone: '', subject: '', body: '',
};

class Message extends React.Component {
  state = {
    availableSubjects: [],
  }

  componentDidMount() {
    getSubjects().then((response) => this.setState({ availableSubjects: response.data }));
  }

  handleSubmit = (values) => {
    insertMessage(values);
  }

  render() {
    const { availableSubjects } = this.state;
    return (
      <Container>
        <Paper style={{ flex: 1, marginTop: '1em' }}>
          <MessageForm handleSubmit={this.handleSubmit} initialValues={initialValues} subjects={availableSubjects} />
        </Paper>
      </Container>
    );
  }
}

export default Message;
