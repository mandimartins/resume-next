import React from 'react';
import getUser from '../utils/getUser';

const index = ({ repos, user }) => {
  return (
    <div className="">
      <h1 className="">Olá, eu sou Amanda Martins</h1>
      <h2 className="">Meus repositórios no github</h2>
      <p>
        Github stats: public repos {user.public_repos} / public_gists:
        {user.public_gists} / followers: {user.followers}
      </p>

      {repos.map((repo) => {
        return (
          <div key={repo.id} className="">
            <h3 className="">{repo.full_name}</h3>
            <p>
              Language: {repo.language} / Stars: {repo.stargazers_count}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('mandimartins');

  return {
    props: {
      repos,
      user,
    },
  };
}

export default index;
