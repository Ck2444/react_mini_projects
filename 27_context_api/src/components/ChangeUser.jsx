import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  return (
    <button onClick={() => changeUserName(userName === 'Konstantin' ? 'Alice' : 'Konstantin')}>
      Change user
    </button>
  );
}
