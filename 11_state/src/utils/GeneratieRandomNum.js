import React from 'react';

export default function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
