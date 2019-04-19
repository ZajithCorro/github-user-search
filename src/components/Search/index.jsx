import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button, Title, Error } from './styled';

export default class Search extends Component {
    state = { user: '', error: '' };

    handleSubmit = async () => {
        const { user } = this.state;

        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) throw Error();
            const json = await response.json();

            const newUser = {
                user: json.login,
                avatar: json.avatar_url,
                name: json.name,
                location: json.location || 'N/A',
                publicRepos: json.public_repos,
                privateRepos: json.public_gists
            };

            this.props.addUser(newUser);

            this.setState({ user: '', error: '' });
        } catch (error) {
            this.setState({ error: `Usuario ${this.state.user} no encontrado` });
        }
    };

    handleInput = e => this.setState({ user: e.target.value });

    render() {
        const { error } = this.state;
        return (
            <Container>
                <Title>Github User Search</Title>
                <Input type='text' onChange={this.handleInput} value={this.state.user} />
                <Button type='submit' onClick={this.handleSubmit}>
                    Search
                </Button>
                {error && <Error>{error}</Error>}
            </Container>
        );
    }
}

Search.propTypes = {
    addUser: PropTypes.func.isRequired
};