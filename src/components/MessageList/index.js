import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { List } from '../List/style';
import Item from '../List/Item';
import { getMessages } from '../../services/api';
import { addMessages } from '../../actions/actions';

class MessageList extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.listMessagesFromApi();
  }

  listMessagesFromApi = async () => {
    const messagesApi = await getMessages();
    this.setState({ messages: messagesApi.data });
    const { addMessages: add } = this.props;
    add(messagesApi.data);
  }

  render() {
    const { messages } = this.props;
    return (
      <List>
        {messages.map((message) => (
          <Item key={message.id} id={message.id} subject={message.subject} date={moment(message.date).format('DD/MM/YYYY HH:mm:ss')} />
        ))}
      </List>
    );
  }
}

const mapStateToProps = (store) => ({
  deleted: store.messageState.deleted,
  messages: store.messageState.messages,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
