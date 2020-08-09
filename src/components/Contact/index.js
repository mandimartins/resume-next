import React from 'react';

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

import Display from './Display';
import { Link } from './styles';

import { FlexWrapper } from '../../styles/helper';

const Contact = () => {
  return (
    <Display title="Contact me">
      <FlexWrapper column>
        <FlexWrapper>
          <FaGithub
            color="white"
            size={80}
            style={{ margin: '1rem 1rem 1rem 0' }}
          />
          <Link href="https://www.github.com/mandimartins">
            Github/mandimartins
          </Link>
        </FlexWrapper>
        <FlexWrapper>
          <FaLinkedin
            color="white"
            size={80}
            style={{ margin: '1rem 1rem 1rem 0' }}
          />
          <Link href="https://www.github.com/mandimartins">
            Github/mandimartins
          </Link>
        </FlexWrapper>
        <FlexWrapper>
          <FaFacebook
            color="white"
            size={80}
            style={{ margin: '1rem 1rem 1rem 0' }}
          />
          <Link href="https://www.github.com/mandimartins">
            Github/mandimartins
          </Link>
        </FlexWrapper>
      </FlexWrapper>
    </Display>
  );
};

export default Contact;
