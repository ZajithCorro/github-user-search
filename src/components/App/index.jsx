import React, { useState } from 'react';
import Search from '../Search';
import ListUser from '../ListUsers';

export default function App() {
  const [users, setUser] = useState([]);

  function addUser(user) {
    setUser([...users, user]);
  }

  return (
    <>
      <Search addUser={addUser} />
      <ListUser users={users} />
    </>
  );
}
