import React, { useState, Fragment } from 'react';

import Carousel from 'react-elastic-carousel';

import fakeRepos from '../../Models/FakeRepo';

import { Title, Paragraph, Link, Strong, SectionTitle } from './styles';
import { Box } from '../../styles/helper';

const Repos = () => {
  const [fakedata, setFakeData] = useState(fakeRepos);

  return (
    <Fragment>
      <SectionTitle>Some Experiences</SectionTitle>
      <Carousel itemsToShow={2} enableAutoPlay autoPlaySpeed={4000}>
        {fakedata.map((repo) => {
          return (
            <Box key={repo.id} style={overrideStyles.box}>
              <Title>
                <Link href="">{repo.full_name}</Link>
              </Title>
              <Paragraph>
                <Strong>Description:&nbsp;</Strong>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Paragraph>
              <Paragraph>
                <Strong>Website:&nbsp;</Strong>
                Home page link
              </Paragraph>
              <Paragraph>
                <Strong>Language:&nbsp;</Strong>
                {repo.language} / Stars: {repo.stargazers_count}
              </Paragraph>
            </Box>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

const overrideStyles = {
  box: {
    width: '90%',
    height: '20rem',
  },
};

export default Repos;
