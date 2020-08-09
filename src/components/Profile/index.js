import React from 'react';

import userFromModel from '../../Models/User';

import { Title, Subtitle, GitStatus, ImageContainer } from './styles';
import { FlexWrapper } from '../../styles/helper';

const Profile = () => {
  return (
    <FlexWrapper column justifyCenter>
      <ImageContainer image_url={userFromModel.avatar_url} />
      <Title>Amanda Martins</Title>
      <Subtitle>Fullstack developer</Subtitle>
      <GitStatus>
        Github status: public repos {userFromModel.public_repos} / followers:
        {userFromModel.followers}
      </GitStatus>
    </FlexWrapper>
  );
};

export default Profile;
