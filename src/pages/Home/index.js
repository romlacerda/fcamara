import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LeftColumn, RightColumn } from '../../components/Column/style';
import MessageList from '../../components/MessageList';
import { Container } from '../../components/Container/style';
import Message from '../../components/Message';

class Home extends Component {
  render() {
    return (
      <Container>
        <LeftColumn>
          <MessageList />
        </LeftColumn>
        <RightColumn>
          <Message />
        </RightColumn>
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({
  deleted: store.messageState.deleted,
});

export default connect(mapStateToProps)(Home);
