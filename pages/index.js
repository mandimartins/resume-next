import React from 'react';

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
  const resUser = await fetch('https://api.github.com/users/mandimartins');
  const user = await resUser.json();

  const resRepos = await fetch(
    'https://api.github.com/users/mandimartins/repos?sort=updated'
  );
  const repos = await resRepos.json();

  const excludedRepos = [
    'mandimartins/js-tdd',
    'mandimartins/gerar-pdf',
    'mandimartins/react-hooks',
    'mandimartins/s3Upload',
    'mandimartins/CI-CD-teste',
  ];

  const isNotFork = (repo) => !repo.fork;
  const allowedRepos = (repo) => !excludedRepos.includes(repo.full_name);

  const extractData = (repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
  });

  const filteredRepos = repos
    .filter(isNotFork)
    .filter(allowedRepos)
    .map(extractData);

  return {
    props: {
      currentData: new Date().toString(),
      repos: filteredRepos,
      user,
    },
  };
}

export default index;
