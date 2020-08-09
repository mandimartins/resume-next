class FakeRepo {
  constructor(id, full_name, description, website, language, stargazers_count) {
    this.id = id;
    this.full_name = full_name;
    this.description = description;
    this.website = website;
    this.language = language;
    this.stargazers_count = stargazers_count;
  }
}

export default new Array(
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Description',
    'Project Website',
    'Repo Language',
    10
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    15
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    20
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    5
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    17
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    6
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    1
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    0
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    0
  ),
  new FakeRepo(
    Math.random() * Math.random() + Math.random(),
    'Repo Fullname',
    'Project Description',
    'Project Website',
    'Repo Language',
    3
  )
);
