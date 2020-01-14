import React from 'react';
import styles from './index.css';

export default function(props) {
  console.log();
  const Icon = props.newRoute[0].icon;
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Icon></Icon>
    </div>
  );
}
