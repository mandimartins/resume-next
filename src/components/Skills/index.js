import React, { useState, Fragment } from 'react';
import Carousel from 'react-elastic-carousel';

import { SectionTitle, Title, Img } from './styles';
import { Box } from '../../styles/helper';

import skillsData from '../../Models/Skill';

const Skills = () => {
  const [skills, setSkills] = useState(skillsData);

  return (
    <Fragment>
      <SectionTitle>My Skills</SectionTitle>
      <Carousel itemsToShow={5} enableAutoPlay autoPlaySpeed={2500}>
        {skills.map((skill) => {
          return (
            <Box key={skill.name} style={overrideStyles.box}>
              <Title>{skill.name}</Title>
              <Img src={skill.img} />
            </Box>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

const overrideStyles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Skills;
