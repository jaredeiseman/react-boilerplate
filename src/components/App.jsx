import React from 'react';
import styles from '../styles/App.css';
import exampleImg from '../assets/test.png';

function App(){
  return (
    <div className={styles.app}>
      <h1>Stuff to render goes here!</h1>
      <p>Remember to change the title of the page in webpack.config.js, as well as the project name in package.json etc. (and restart the git repo).</p>
      <img src={exampleImg} alt="example" />
    </div>
  );
}

export default App;
