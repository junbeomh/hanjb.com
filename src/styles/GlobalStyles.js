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
    --font-main: 'font-family: 'Nunito Sans', sans-serif;';
    --font-secondary: 'ROBOTO';
    --font-name: 'Sacramento';
    --color-accent: rgba(255, 255, 255, 0.6);
     --color-blue: rgba(3, 70, 179, 1);
  }

  body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
    width: 100%;
    font-family: var(--font-main);
    font-weight: 600;
    transition: all 0.5s ease-in;
  }

  .logo {
    display: flex;
    align-items: center;
    text-transform: uppsercase;
    justify-content: flex-end;
    letter-spacing: 5px;
    cursor: pointer;
    margin-top: 0.25rem;
    margin-left: 4rem;
    color:${props => props.theme.accentColor};
    h4 {
      font-weight: 800;
    }
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
    color: ${props => props.theme.textColorDark};
  }

 .medium-heading{
    font-size: clamp(40px, 8vw, 65px);
    font-weight: 700;
 }

 .text-accent {
    color: ${props => props.theme.accentColor}
  }

  .navbar-active {
    font-weight: bold;
    border-bottom: 1.5px solid ${props => props.theme.accentColorLight};
    transition: all 0.1s linear;
    transform: translateY(-2px);
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

  .resume-content-header-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 75px;
    color: ${props => props.theme.textColorDark};
  }

  .resume-content-header-index {
    font-size: 30px;
    margin-right: 15px;
  }

  .resume-content-header-title {
    font-size: 35px;
  }

  .resume-content-title.resume-content-index {
    font-size: 25px,
    vertical-align: top,
    margin-right: 10px,
    font-weight: 800,
  }

  .resume-content-title.resume-content-header {
    font-size: 33px,
    line-height: 10px,
    position: relative,
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${props => props.theme.textColor};
    position: relative;
    cursor: pointer;
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
    }
  }

  .vertical-timeline-element-title,
  .vertical-timeline-element-description {
    font-weight: 700;
    color: black;

  }
  .vertical-timeline-element-subtitle {
    color: black;
  }

  .vertical-timeline-element-date  {
    color: ${props => props.theme.accentColor};
    font-weight: bold;

    @media screen and (max-width: 1170px){    
      color: black;
    }
   @media screen and (max-width: 480px){    
      color: black;
    }
  }

  .vertical-timeline-element-icon {
    background: ${props => props.theme.accentColor};
  }

  .vertical-timeline::before {
    background:  ${props => props.theme.accentColor};
  }


  .vertical-timeline-element-custom-border {
    border: 1px solid ${props => props.theme.accentColor};
  }
  
  /* Icon container's border */
 .vertical-timeline-element-icon {
    box-shadow: 0 0 0 5px ${props => props.theme.accentColorLight}, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
.vertical-timeline-element-content {
  border: 1.5px solid #e0e0e0;
}

`


