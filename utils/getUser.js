const getUser = async (username) => {
  const resUser = await fetch(`https://api.github.com/users/${username}`);
  const user = await resUser.json();

  const resRepos = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
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
    repos: filteredRepos,
    user,
  };
};

export default getUser;
