import './Info.css';
import styles from './Info.module.css';
import React from 'react';

console.log(styles);
export default function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading into the Info component</h2>
      <button className="my-button">Click me in the info component</button>
      <button className={styles.myOtherButton}>Buttom with local CSS styles</button>
    </div>
  );
}
