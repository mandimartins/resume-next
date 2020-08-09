import React from 'react';

import Contact from '../Contact';
import Profile from '../Profile';

import { FlexWrapper } from '../../styles/helper';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <FlexWrapper>
        <Profile />
        <Contact />
      </FlexWrapper>
    </Container>
  );
};

export default Header;
