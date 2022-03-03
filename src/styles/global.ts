import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #2e3a59;
  }

  html {
    @media (max-width: 1400px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    @media (max-width: 450px) {
      font-size: 83.5%;
    }
  }

  button {
    cursor: pointer;
  }
  
  .react-modal-data {
  z-index: 40;
  height: 100%;
  max-height: 35.5rem;
  width: 100%;
  max-width: 360px;
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  position: relative;
  border-radius: 1rem;
  @media (max-width: 450px) {
    max-height: 34.5rem;
  }
  @media (max-width: 740px) {
    max-height: 34.5rem;
  }
}
.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  background: #F7F9FC;
  height: 38px;
  width: 38px;
  border: 2px solid #8F9BB3;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    font-weight: 700;
    font-size: 1.3rem;
    color: #9d9d9d;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}
.react-modal-overlay {
    z-index: 20;
    background: rgba(0, 0, 0, 0.35);
    background-blend-mode: multiply;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-form {
  z-index: 40;
  height: 100%;
  max-height: 35.5rem;
  width: 100%;
  max-width: 360px;
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  position: relative;
  border-radius: 1rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 450px) {
    max-height: 34.5rem;
  }
  @media (max-width: 740px) {
    max-height: 34.5rem;
  }
}


`;
