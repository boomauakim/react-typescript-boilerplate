import React from 'react';
import logo from 'assets/svg/logo.svg';
import * as styles from './index.styles';

const Index = () => {
  return (
    <styles.Page>
      <styles.Container>
        <styles.Logo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <styles.Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </styles.Link>
      </styles.Container>
    </styles.Page>
  );
};

export default Index;
