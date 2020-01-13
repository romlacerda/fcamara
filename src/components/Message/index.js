import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {
  Message, Container, Title, P, Body, ButtonDiv,
} from './style';
import { deleteMessage as deleteRequest } from '../../services/api';
import { deleteMessageFrom } from '../../services/messageService';
import { deleteMsg, selectMessage } from '../../actions/actions';
import { Alert } from '../Alert';

class MessageBox extends Component {
  state = {
    deleted: false,
  }

  delete = () => {
    const {
      messageSelected, messages, deleteMsg: deleteAction, selectMessage: selectAction,
    } = this.props;
    deleteRequest(messageSelected[0].id).then(() => {
      const newMessages = deleteMessageFrom(messages, messageSelected[0].id);
      deleteAction(newMessages);
      selectAction(null);
      this.setState({ deleted: true });
    });
  }

  render() {
    const { messageSelected, messages } = this.props;
    const isSelected = messageSelected !== null;
    const { deleted: deletedState } = this.state;
    let body;
    if (isSelected) {
      body = (
        <Container>
          {deletedState ? <Alert severity="success">Mensagem apagada com sucesso!</Alert> : ''}
          <Message>
            <Title>
              {messageSelected[0].subject}
            </Title>
            <P>
              {moment(messageSelected[0].date).format('DD/MM/YYYY HH:mm:ss')}
            </P>
            <Body>
              {messageSelected[0].body}
            </Body>
          </Message>
          <ButtonDiv>
            <Button color="secondary" variant="contained" onClick={this.delete}>Excluir Mensagem</Button>
          </ButtonDiv>
        </Container>
      );
    } else {
      body = (
        <Container>
          {deletedState ? <Alert severity="success">Mensagem apagada com sucesso!</Alert> : ''}
          {messages.length > 0 ? ''
            : <Alert severity="info">Não há mensagens cadastradas.</Alert>}
        </Container>
      );
    }

    return (
      <>
        { body }
      </>

    );
  }
}

MessageBox.propTypes = {
  messageSelected: PropTypes.array,
  deleted: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  deleteMsg: PropTypes.func.isRequired,
  selectMessage: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date),
};

MessageBox.defaultProps = {
  messageSelected: {},
  date: new Date(),
};

const mapStateToProps = (store) => ({
  messageSelected: store.messageState.messageSelected,
  messages: store.messageState.messages,
  deleted: store.messageState.deleted,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteMsg, selectMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
