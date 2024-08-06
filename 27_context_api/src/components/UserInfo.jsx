import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function UserInfo() {
  const { userName } = useContext(UserContext);
  return <h1>{userName}</h1>;
}
