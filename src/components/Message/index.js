import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {
  Message, Container, Title, P, Body, ButtonDiv,
} from './style';
import { deleteMessage as deleteRequest } from '../../services/api';
import { deleteMessageFrom } from '../../services/messageService';
import { deleteMsg } from '../../actions/actions';

class MessageBox extends Component {
  delete = () => {
    const { messageSelected, messages, deleteMsg } = this.props;
    deleteRequest(messageSelected[0].id).then(() => {
      const newMessages = deleteMessageFrom(messages, messageSelected[0].id);
      deleteMsg(newMessages);
    });
  }

  render() {
    const { messageSelected } = this.props;
    return (
      <Container>
        <Message>
          <Title>
            {messageSelected !== null ? messageSelected[0].subject : ''}
          </Title>
          <P>
            {messageSelected !== null ? moment(messageSelected[0].date).format('DD/MM/YYYY HH:mm:ss') : ''}
          </P>
          <Body>
            {messageSelected !== null ? messageSelected[0].body : ''}
          </Body>
        </Message>
        <ButtonDiv>
          <Button color="secondary" variant="contained" onClick={this.delete}>Excluir Mensagem</Button>
        </ButtonDiv>
      </Container>

    );
  }
}

const mapStateToProps = (store) => ({
  messageSelected: store.messageState.messageSelected,
  messages: store.messageState.messages,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteMsg }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
