import React from 'react';

import { Container, Paragraph, Strong } from './styles';

const Footer = () => {
  return (
    <Container>
      <Paragraph>
        <Strong>Developed by:</Strong> Amanda Martins
        <br />
      </Paragraph>
      <Paragraph>
        <Strong>Using:</Strong> Nextjs
      </Paragraph>
    </Container>
  );
};

export default Footer;
