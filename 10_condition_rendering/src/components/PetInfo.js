import React from 'react';

export default function PetInfo({ animal, age, hasPet }) {
  return hasPet ? <h1>{`My ${animal} is ${age} years old`}</h1> : <h2>I don't habe any animal</h2>;
}
