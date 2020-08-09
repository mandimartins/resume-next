class Skill {
  constructor(name, img_url) {
    this.name = name;
    this.img = img_url;
  }
}

export default new Array(
  new Skill(
    'Javascript',
    'https://cdn.worldvectorlogo.com/logos/javascript.svg'
  ),
  new Skill('Nodejs', 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg'),
  new Skill(
    'SQL/Sequelize',
    'https://cdn.worldvectorlogo.com/logos/sequelize.svg'
  ),
  new Skill('Reactjs', 'https://cdn.worldvectorlogo.com/logos/react.svg'),
  new Skill(
    'React Native',
    'https://cdn.worldvectorlogo.com/logos/react-1.svg'
  ),
  new Skill(
    'Electron',
    'https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg'
  ),
  new Skill('Jest', 'https://cdn.worldvectorlogo.com/logos/jest-0.svg'),
  new Skill('css-in-js', 'https://styled-components.com/logo.png'),
  new Skill('Sass', 'https://cdn.worldvectorlogo.com/logos/sass-1.svg'),
  new Skill(
    'Codeship CI/CD',
    'https://cdn.worldvectorlogo.com/logos/codeship.svg'
  ),
  new Skill(
    'AWS Deployment',
    'https://cdn.worldvectorlogo.com/logos/aws-logo.svg'
  ),
  new Skill(
    'Heroku Deployment',
    'https://cdn.worldvectorlogo.com/logos/heroku.svg'
  ),
  new Skill(
    'Netlify Deployment',
    'https://cdn.worldvectorlogo.com/logos/netlify.svg'
  )
);
