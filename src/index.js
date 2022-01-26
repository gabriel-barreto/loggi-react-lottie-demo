import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { App } from './App';

const GlobalReset = createGlobalStyle`
  :root {
    --white: white;
    --black: black;
    --primaryColor: #006aff;
    --borderRadius: .5rem;
  }

  a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <StrictMode>
    <>
      <GlobalReset />
      <App />
    </>
  </StrictMode>,
  document.getElementById('root'),
);
