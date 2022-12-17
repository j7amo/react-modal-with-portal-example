import React, { useState } from "react";
import AddUser from "./components/feature/Users/AddUser/AddUser";
import UsersList from "./components/feature/Users/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
