import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.min.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: ${props => props.theme.colors.background};
    transition: background 0.3s;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: ${props =>
      props.theme.title !== "light" && props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.support};
    border-radius: 8px;
    padding: 0 24px;

    &:focus {
      border-bottom: 5px solid ${props => props.theme.colors.primary};
      transition: all 0.1s ease-in;
    }

    &:not(:focus) {
      transition: all 0.1s ease-out;
    }
  }

  form textarea {
    width: 100%;
    resize: vertical;
    min-height: 140px;
    height: 60px;
    color: ${props =>
      props.theme.title !== "light" && props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.support};
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;

    &:focus {
      border-bottom: 5px solid ${props => props.theme.colors.primary};
      transition: border-bottom 0.1s ease-in;
    }

    &:not(:focus) {
      transition: border-bottom 0.1s ease-out;
    }
  }

  .button {
    width: 100%;
    height: 60px;
    background:  ${props => props.theme.colors.primary};
    border: 0;
    border-radius: 8px;
    color: ${props => props.theme.colors.accent};
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }

  .button:hover {
    filter: brightness(90%);
  }

  .back-link {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.secondary};
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    svg {
       margin-right: 8px;
    }
  }
`;
