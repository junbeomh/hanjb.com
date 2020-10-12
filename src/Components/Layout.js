import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Styles/GlobalStyles';
import { light, dark } from '../Styles/Theme';
import { useDarkMode } from '../Hooks/useDarkMode';
import styled from 'styled-components';
import CustomNavbar from "./Navbar";
import SocialBar from './SocialBar';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import Switch from "react-switch";

const ThemeWrapper = styled.header`
    margin-top: 0.5rem;
    @media screen and (max-width: 768px){    
        margin-top: 0rem;
      }
    @media screen and (max-width: 480px){    
        margin-top: 0rem;
      }
`;

const Layout = ({ children }) => {
    const [theme, toggleTheme, componentMounted, checked] = useDarkMode();
    const themeMode = theme === 'light' ? light : dark;

    if (!componentMounted) {
        return <div />
    };

    return (
        <div>
            <ThemeProvider theme={themeMode}>
                <CustomNavbar>
                    <ThemeWrapper>
                        <label>
                            <Switch
                                onChange={toggleTheme}
                                checked={checked}
                                handleDiameter={20}
                                offColor="#fff"
                                onColor="#fff"
                                offHandleColor="#023876"
                                onHandleColor="#121212"
                                height={28}
                                width={47}
                                checkedIcon={
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "100%",
                                            color: "#DBA111",
                                        }}
                                    >
                                        <i className="fas fa-moon"></i>  </div>
                                }
                                uncheckedIcon={
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        color: "#DBA111",
                                    }}
                                    >
                                        <i className="fas fa-sun"></i>   </div>
                                }
                            />
                        </label>
                    </ThemeWrapper>
                </CustomNavbar>
                <GlobalStyles />
                <SocialBar />
                <div id="content">
                    {children}
                </div>
            </ThemeProvider>
        </div>
    );
}



export default Layout;
