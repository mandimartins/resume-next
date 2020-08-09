class User {
  constructor(avatar_url, public_repos, followers) {
    this.avatar_url = avatar_url;
    this.public_repos = public_repos;
    this.followers = followers;
  }
}

export default new User(
  'https://avatars1.githubusercontent.com/u/47390004?s=460&u=e8a4d0a570c8d482bd6e69faa3304ab6927202e7&v=4',
  33,
  9
);
