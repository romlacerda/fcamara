import styled from 'styled-components';

export const Container = styled.li`
  color: ${(props) => (props.isSelected ? '#fff' : '#6f6f6f')};
  border: 1px solid black;
  text-transform: uppercase;
  padding: 3%;
  height: 5.5em;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? '#47579e' : '#fff')};
  margin-bottom: 1em;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#47579e' : '#c8d1f7')};
  }
`;
