import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button, Title, Error } from './styled';

export default function Search({ addUser }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  async function handleClick() {
    try {
      const response = await fetch(`https://api.github.com/users/${value}`);
      if (!response.ok) throw Error();
      const json = await response.json();

      const newUser = {
        user: json.login,
        avatar: json.avatar_url,
        name: json.name,
        location: json.location || 'N/A',
        publicRepos: json.public_repos,
        privateRepos: json.public_gists,
      };

      addUser(newUser);

      setValue('');
      setError('');
    } catch (error) {
      setError(`Usuario ${value} no encontrado`);
    }
  }

  return (
    <Container>
      <Title>Github User Search</Title>
      <Input
        type='text'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button type='submit' onClick={handleClick}>
        Search
      </Button>
      {error && <Error>{error}</Error>}
    </Container>
  );
}

Search.propTypes = {
  addUser: PropTypes.func.isRequired,
};
