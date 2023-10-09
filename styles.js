import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --primary-color: #118ab2;
    --primary-color-hover: #0077b6;
    --danger-color: #9d0208;
    --danger-color-hover: crimson;
    --neutral-color: lightGray;
    --neutral-color-hover: gray;
  }

  html {
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: white;
  }

  body {
    background-image: url("/blurry-gradient-haikei.svg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem;
  }

  #__next {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 100vh;
  }
`;

export const colors = {
  default: "var(--primary-color)",
  defaultHover: "var(--primary-color-hover)",
  danger: "var(--danger-color)",
  dangerHover: "var(--danger-color-hover)",
  neutral: "var(--neutral-color)",
  neutralHover: "var(--neutral-color-hover)",
};
