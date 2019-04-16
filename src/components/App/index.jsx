import React, { Component } from 'react';
import { Container, Error } from './styled';
import Search from '../Search';
import UserCard from '../UserCard';

class App extends Component {
    state = {
        user: '',
        data: [],
        error: ''
    };

    handleSubmit = async e => {
        const { user, data } = this.state;

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

            data.push(newUser);
            this.setState({ data, user: '', error: '' });
        } catch (error) {
            this.setState({ error: `Usuario ${this.state.user} no encontrado`, user: '' });
        }
    };

    handleInput = e => {
        this.setState({ user: e.target.value });
    };

    render() {
        const { data, error } = this.state;
        return (
            <React.Fragment>
                <Search
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    value={this.state.user}
                />
                {error && <Error>{error}</Error>}

                <Container>
                    {data && data.map((user, index) => <UserCard user={user} key={index} />)}
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
