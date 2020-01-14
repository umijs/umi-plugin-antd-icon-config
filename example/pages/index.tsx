import React from 'react';
import styles from './index.css';

export default function(props) {
  console.log(props);
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      {props.route.icon}
    </div>
  );
}
