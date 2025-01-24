import { useState } from "react";
import './App.css';
import { UserForm } from './components/UserForm';
import { UserTable } from './components/UserTable';

function App() {
  const [userList, setUserList] = useState([]);

  const addUser = (userDb) => {
    setUserList([...userList, userDb]);
  }

  return (
    <div>
      {/* Form Component Here */}
      <UserForm addUser={addUser}/>
      <UserTable userList={userList} />
      {/* Form Component Here */}
    </div>
  );
}

export default App;
