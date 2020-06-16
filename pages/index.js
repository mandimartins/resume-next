import React from 'react';

const index = (props) => {
  return (
    <div>
      <h1>Bem-vindo!</h1>
      <div>{props.currentDate}</div>
      {props.repos.map((repo) => {
        return (
          <div key={repo.id}>
            <h3>{repo.full_name}</h3>
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
  const res = await fetch(
    'https://api.github.com/users/mandimartins/repos?sort=updated'
  );
  const repos = await res.json();

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
    },
  };
}

export default index;
