import React, { Fragment } from 'react';
import getUser from '../utils/getUser';

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

import { GlobalStyle, ResetStyle } from '../styles/globalStyle';
import {
  Container,
  Title,
  Subtitle,
  Box,
  FlexWrapper,
  ImageContainer,
  HeaderBackground,
} from '../styles';

import Display from '../components/Display';

const index = ({ repos, user }) => {
  return (
    <Fragment>
      <ResetStyle />
      <GlobalStyle />
      <HeaderBackground>
        <FlexWrapper>
          <FlexWrapper column>
            <ImageContainer />
            <Title className="">Amanda Martins</Title>
            <Subtitle className="">Fullstack developer</Subtitle>
            {/* <p>
              Github stats: public repos {user.public_repos} / public_gists:
              {user.public_gists} / followers: {user.followers}
            </p> */}
          </FlexWrapper>

          <Display title="CONTACT ME">
            <FlexWrapper column>
              <FlexWrapper>
                <FaGithub
                  color="white"
                  size={80}
                  style={{ margin: '1rem 1rem 1rem 0' }}
                />
                <a
                  href="https://www.github.com/mandimartins"
                  style={{ color: '#eee', margin: 'auto 0' }}
                >
                  Github/mandimartins
                </a>
              </FlexWrapper>
              <FlexWrapper>
                <FaLinkedin
                  color="white"
                  size={80}
                  style={{ margin: '1rem 1rem 1rem 0' }}
                />
                <a
                  href="https://www.github.com/mandimartins"
                  style={{ color: '#eee', margin: 'auto 0' }}
                >
                  Github/mandimartins
                </a>
              </FlexWrapper>
              <FlexWrapper>
                <FaFacebook
                  color="white"
                  size={80}
                  style={{ margin: '1rem 1rem 1rem 0' }}
                />
                <a
                  href="https://www.github.com/mandimartins"
                  style={{ color: '#eee', margin: 'auto 0' }}
                >
                  Github/mandimartins
                </a>
              </FlexWrapper>
            </FlexWrapper>
          </Display>
        </FlexWrapper>
      </HeaderBackground>
      {/* {repos.map((repo) => {
        return (
          <Box key={repo.id}>
            <h3 className="">{repo.full_name}</h3>
            <p>
              Language: {repo.language} / Stars: {repo.stargazers_count}
            </p>
          </Box>
        );
      })} */}
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const { repos, user } = await getUser('mandimartins');

//   return {
//     props: {
//       repos,
//       user,
//     },
//   };
// }

export default index;
