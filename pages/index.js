import React from 'react';

const index = (props) => {
  return (
    <div>
      <h1>Bem-vindo!</h1>
      <div>{props.currentDate}</div>
      {props.repos.map((repo) => {
        return (
          <div>
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
  const res = fetch(
    'https://api.github.com/users/mandimartins/repos?sort=updated'
  );
  const repos = await (await res).json();

  return {
    props: {
      currentData: new Date().toString(),
      repos,
    },
  };
}

export default index;
