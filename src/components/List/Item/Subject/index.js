import React from 'react';
import PropTypes from 'prop-types';
import { Container, P } from './style';

const Subject = ({ subject }) => (
  <Container>
    <P>{subject}</P>
  </Container>
);

Subject.propTypes = {
  subject: PropTypes.string.isRequired,
};

export default Subject;
