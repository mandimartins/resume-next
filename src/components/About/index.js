import React from 'react';

import { Text } from './styles';
import { Box } from '../../styles/helper';

import paragraphs from '../../Models/Paragraph';

const About = () => {
  return (
    <Box style={overrideStyles.box}>
      <Text>
        {paragraphs.map((paragraph) => (
          <p>{paragraph.text}</p>
        ))}
      </Text>
    </Box>
  );
};

const overrideStyles = {
  box: {
    position: 'relative',
    top: '-3rem',
  },
};

export default About;
