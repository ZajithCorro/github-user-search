import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button, Title } from './styled';

const Search = ({ handleInput, handleSubmit, value }) => {
    return (
        <Container>
            <Title>Github User Search</Title>
            <Input type='text' onChange={handleInput} value={value} />
            <Button type='submit' onClick={handleSubmit}>
                Search
            </Button>
        </Container>
    );
};

Search.propTypes = {
    handleInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired
};

export default Search;
