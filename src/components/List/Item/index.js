import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './style';
import Subject from './Subject';
import Date from './Date';
import { selectMessage } from '../../../actions/actions';
import { filterMessage } from '../../../services/messageService';

class Item extends Component {
  state = {
    isSelected: false,
  }

  clickHandler = () => {
    const { isSelected } = this.state;
    const { selectMessage, id } = this.props;
    this.setState({ isSelected: !isSelected });

    filterMessage(id).then((ok) => selectMessage(ok));
  }

  render() {
    const { subject, date } = this.props;
    const { isSelected } = this.state;
    return (
      <Container isSelected={isSelected} onClick={this.clickHandler}>
        <Subject subject={subject} />
        <Date date={date} />
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({
  messageSelected: store.messageState,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectMessage }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Item);
