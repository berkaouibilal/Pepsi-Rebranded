import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Pepsi Theme Colors */
    --pepsi-blue: #004B93;
    --pepsi-red: #EE1133;
    --pepsi-light: #F5F5F5;
    --pepsi-dark: #0A1929;
    
    /* Light Theme */
    --background: var(--pepsi-light);
    --text: #0A1929;
    --card-bg: white;
    --nav-bg: rgba(255, 255, 255, 0.95);
    --shadow: rgba(0, 75, 147, 0.1);
    --newsletter-color: var(--pepsi-blue);
    --button: var(--pepsi-red);
    --text-highlight: var(--pepsi-blue);
    --link-color: var(--pepsi-red);
    
    /* Transitions */
    --transition: all 0.2s ease-in-out;
  }

  [data-theme='dark'] {
    --background: var(--pepsi-dark);
    --text: #ffffff;
    --card-bg: #1A2837;
    --nav-bg: rgba(10, 25, 41, 0.95);
    --shadow: rgba(0, 0, 0, 0.3);
    --newsletter-color: var(--pepsi-red);
    --button: var(--pepsi-blue);
    --text-highlight: var(--pepsi-red);
    --link-color: var(--pepsi-blue);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.5;
    overflow-x: hidden;
    transition: var(--transition);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;

/*  background: var(--pepsi-blue);
  color: white;*/