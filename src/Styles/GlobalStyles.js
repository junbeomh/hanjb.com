import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  :root{
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 26px;
    --fz-heading: 32px;
    --fz-name: 28px;
    --font-main: 'ROBOTO';
    --font-name: 'Sacramento';
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 40px);
  }



  body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    transition: "all 0.50s linear";
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
    width: 100%;
    font-family: var(--font-main);
    font-weight: 400;
  }

  .navbar-active {
    color: #DBA111 !important;
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6, {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${props => props.theme.textColor}
    line-height: 1;
    
  }
  

  section {
    margin: 0 auto;
    padding: 100px 0;
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
}

.resume-content-title {
  display: flex;
  justify-content: center;
  align-items: center;
}


  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${props => props.theme.textColor};
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    &:hover,
    &:focus {
      color: var(--blue);
    }
  }
  ul {
    &:after {
      background-color: ${props => props.theme.textColor};
    }
  }

  button {
    color: ${props => props.theme.buttonColor};
    border: ${props => props.theme.buttonBorder};
    :hover {
      background: ${props => props.theme.buttonHover};
      font-weight: bold;
    }
  }

  
`

