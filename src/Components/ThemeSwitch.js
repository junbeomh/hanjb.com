import React, { useState, useContext } from 'react';
import Switch from "react-switch";
import { AppContext } from './Layout';
import styled, { css } from 'styled-components';


const ThemeWrapper = styled.header`
    margin-top: 0.5rem;
    @media screen and (max-width: 768px){    
        margin-top: 0rem;
      }
    @media screen and (max-width: 480px){    
        margin-top: 0rem;
      }
`;

const ThemeSwitch = () => {
    const toggleTheme = () => {
        dispatch({ type: "toggleTheme" });
        setChecked(!checked);
    };

    const { dispatch } = useContext(AppContext);
    const [checked, setChecked] = useState(false);
    return (
        <ThemeWrapper>
            <label>
                <Switch
                    onChange={toggleTheme}
                    checked={checked}
                    handleDiameter={20}
                    offColor="#fff"
                    onColor="#fff"
                    offHandleColor="#034694"
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
    );
};

export default ThemeSwitch;