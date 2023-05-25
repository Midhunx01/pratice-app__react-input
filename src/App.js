import { useState } from 'react';

import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {

  const [userList, setUserList] = useState([]);

  function addUsersHandler(uname, uage) {
    setUserList((prevuserlist)=> {
      return [...prevuserlist, {username: uname, userAge: uage, id:Math.random().toString()}]
    })
  }
  return (
    <>
      <AddUsers addUsers={addUsersHandler}/>
      <UserList users={userList}/>
    </>
  )
}

export default App;
