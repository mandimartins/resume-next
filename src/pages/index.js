import React, { Fragment } from 'react';
import getUser from '../utils/getUser';

import { GlobalStyle, ResetStyle } from '../styles/globalStyle';
import { Wrapper } from '../styles/helper';

import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Repos from '../components/Repos';
import Footer from '../components/Footer';

const index = ({ repos, user }) => {
  return (
    <Fragment>
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <Wrapper>
        <About />
        <Skills />
        <Repos />
        <Footer />
      </Wrapper>
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
