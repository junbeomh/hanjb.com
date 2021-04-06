import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Switch from "react-switch";
import { toggleTheme } from "../actions";

const themeSwitch = ({ theme, toggleTheme }) => {
    return (
        <>
            <Switch
                onChange={() => {toggleTheme(theme)}} 
                checked={theme === "dark" ? true : false }
                handleDiameter={18}
                offColor="#fff"
                onColor="#fff"
                offHandleColor="#ededed"
                onHandleColor="#15202B"
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
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.themeSwitchReducer.theme,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleTheme }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(themeSwitch);