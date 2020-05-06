import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Name, Info, ItemInfo, ItemInfoTitle } from './styled';

const UserCard = ({ user }) => (
  <Card>
    <Avatar src={user.avatar} alt='Foto perfil' />

    <Info>
      <Name>{user.user}</Name>

      <ItemInfo>
        <ItemInfoTitle>Name:</ItemInfoTitle>
        <span>{user.name}</span>
      </ItemInfo>

      <ItemInfo>
        <ItemInfoTitle>Location:</ItemInfoTitle>
        <span>{user.location}</span>
      </ItemInfo>

      <ItemInfo>
        <ItemInfoTitle>Public Repos:</ItemInfoTitle>
        <span>{user.publicRepos}</span>
      </ItemInfo>

      <ItemInfo>
        <ItemInfoTitle>Private Repos:</ItemInfoTitle>
        <span>{user.privateRepos}</span>
      </ItemInfo>
    </Info>
  </Card>
);

UserCard.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
