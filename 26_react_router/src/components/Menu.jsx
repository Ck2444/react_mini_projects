import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Menu() {
  const style = ({ isActive }) => (isActive ? 'activeLink' : 'Link');
  return (
    <nav>
      <NavLink className={style} to="/" end>
        Home
      </NavLink>

      <NavLink className={style} to="courses">
        Courses
      </NavLink>
      <NavLink className={style} to="/about">
        About
      </NavLink>
      <NavLink className={style} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
