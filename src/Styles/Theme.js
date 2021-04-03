const base = {
  easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  colorWhite: "rgb(255, 255, 255)",
  colorBlack: "rgb(0, 0, 0)",
  fontWeightEmphasis: "700",
  fontWeightReguar: "600",
  fontMedium: "22px",
  buttonColor: "rgba(255, 255, 255, 0.6)",
  buttonBorder: "1px solid rgba(255, 255, 255, 0.6)",
};

export const dark = {
  id: "dark",
  ...base,
  primary: "#121212",
  backgroundColor: "linear-gradient(to bottom, #121212 0%, #121212 100%)",
  textColor: "rgba(255, 255, 255, 0.75)",
  textColorDark: "white",
  accentColor: 'white',
  accentColorLight: 'rgba(255,255,255, 0.7)',
  navColor: "black",
  buttonHover: ' rgba(100, 100, 100, 0.3)',
};

export const light = {
  id: "light",
  ...base,
  primary: "#7de2fc",
  backgroundColor: "white",
  textColor: "rgba(0,0,0,0.75)",
  textColorDark: "black",
  accentColor: '#034694',
  accentColorLight: '#1C77C3',
  navColor: "white",
  buttonHover: '#034694',
};

export const theme = { dark, light };

// backgroundColor: "linear-gradient(to bottom, #7de2fc 0%, rgba(230, 230, 230, 0.5) 100%)",
