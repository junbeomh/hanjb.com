export const toggleTheme = (theme) => {
    let newTheme = ""
    theme === "dark" ? newTheme = "light" : newTheme = "dark";
    localStorage.setItem('theme', newTheme);
    return {
        type: "TOGGLE_THEME",
        payload: newTheme,
    }
}

export const getTheme = (theme) => {
    let savedTheme = "";
    !theme ? savedTheme = "dark" : savedTheme = theme;
    return {
        type: "GET_THEME",
        payload: savedTheme,
    }
}