import React, { useReducer, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { initialState, reducer } from "../Styles/Reducer";
import { GlobalStyles } from '../Styles/GlobalStyles';
import Gradients from './Gradients';
import CustomNavbar from "./Navbar";
import SocialBar from './SocialBar';
import Footer from '../Sections/Footer';
import '../App.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export const AppContext = createContext();

const Layout = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { currentTheme } = state;

    return (
        <div className="App">
            <ThemeProvider theme={currentTheme}>
                <AppContext.Provider value={{ ...state, dispatch }}>
                    <GlobalStyles />
                    <Gradients/>
                    <CustomNavbar/>
                    <SocialBar/>
                    <div id="content">
                        {children}
                        <Footer></Footer>
                    </div>
                </AppContext.Provider>
            </ThemeProvider>
        </div>
    );
}



export default Layout;
