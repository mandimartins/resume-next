import React from 'react';

import { Container, Title } from './styles';

const Display = (props) => {
  return (
    <>
      <Container>
        <Title>{props.title}</Title>
        {props.children}
      </Container>
    </>
  );
};

export default Display;
