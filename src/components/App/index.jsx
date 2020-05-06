import React, { Component } from 'react';
import Search from '../Search';
import ListUser from '../ListUsers';

class App extends Component {
  state = { users: [] };

  addUser = (user) => this.setState({ users: [...this.state.users, user] });

  render() {
    const { users } = this.state;
    return (
      <React.Fragment>
        <Search addUser={this.addUser} />
        <ListUser users={users} />
      </React.Fragment>
    );
  }
}

export default App;
