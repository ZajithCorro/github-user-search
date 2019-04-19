import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import UserCard from '../UserCard';
import { Container } from './styled';

const ListUser = ({ users }) => {
    return (
        <Container>
            {users.map(user => (
                <UserCard user={user} key={shortid.generate()} />
            ))}
        </Container>
    );
};

ListUser.propTypes = {
    users: PropTypes.array.isRequired
};

export default ListUser;
