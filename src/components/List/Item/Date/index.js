import React from 'react';
import PropTypes from 'prop-types';
import { Container, P } from './style';

const Date = ({ date }) => (
  <Container>
    <P>{date}</P>
  </Container>
);

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
