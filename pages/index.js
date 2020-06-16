import React from 'react';
import getUser from '../utils/getUser';

const index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Olá, eu sou Amanda Martins</h1>
      <h2 className="font-bold text-3xl">Meus repositórios no github</h2>
      <p>
        Github stats: public repos {user.public_repos} / public_gists:
        {user.public_gists} / followers: {user.followers}
      </p>

      {repos.map((repo) => {
        return (
          <div
            key={repo.id}
            className="rounded bg-gray-200 mx-8 my-4 p-8 hover:shadow"
          >
            <h3 className="font-bold">{repo.full_name}</h3>
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
