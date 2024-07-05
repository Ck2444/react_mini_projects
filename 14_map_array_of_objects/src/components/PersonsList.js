import React from 'react';
import persons from '../data/persons';
import Person from './Person';

export default function PersonsList() {
  return (
    <div className="cards">
      {persons.map((person) => {
        const { id, firstName, lastName, email, img } = person;
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
}
