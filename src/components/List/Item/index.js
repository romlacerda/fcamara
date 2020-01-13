import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Container } from './style';
import Subject from './Subject';
import Date from './Date';
import { selectMessage, changeMessageStatus } from '../../../actions/actions';
import { filterMessage } from '../../../services/messageService';

class Item extends Component {
  state = {
    isSelected: false,
  }

  clickHandler = () => {
    const { isSelected } = this.state;
    const { selectMessage: select, id, changeMessageStatus: change } = this.props;
    this.setState({ isSelected: !isSelected });

    if (!isSelected) {
      filterMessage(id).then((ok) => select(ok)).then(() => change(false));
    } else {
      select(null);
    }
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
Item.propTypes = {
  selectMessage: PropTypes.func.isRequired,
  changeMessageStatus: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  messageSelected: store.messageState,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectMessage, changeMessageStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Item);
