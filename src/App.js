import { useState } from 'react';

import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';


function App() {

  const [userList, setUserList] = useState([]);
  const [nullCheck, setNullCheck] = useState(false);

  function addUsersHandler(uname, uage) {
    setNullCheck(true);
    setUserList((prevuserlist) => {
      return [...prevuserlist, { username: uname, userAge: uage, id: Math.random().toString() }]
    })
  }
  return (
    <>
      <AddUsers addUsers={addUsersHandler} />
      {nullCheck && <UserList users={userList} />}
    </>
  )
}

export default App;
