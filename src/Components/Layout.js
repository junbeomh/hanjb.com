import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { GlobalStyles } from '../styles/GlobalStyles';
import { light, dark } from '../styles/Theme';
import CustomNavbar from "./Navbar";
import SocialBar from './SocialBar';
import PropTypes from 'prop-types';
import { getTheme } from '../actions';


const Layout = ({ children, theme, getTheme }) => {

    // Get saved theme from local storage on initial load 
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        getTheme(theme);
    }, [])

    return (
        <>
            <ThemeProvider theme={theme === "dark" ? dark : light}>
                <CustomNavbar />
                <GlobalStyles />
                <SocialBar />
                <div id="content">
                    {children}
                </div>
            </ThemeProvider>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        theme: state.themeSwitchReducer.theme,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getTheme }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
