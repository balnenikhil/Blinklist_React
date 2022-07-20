import { createTheme } from "@mui/material";

const Themes = createTheme({

  background: {
    Light: "#F7F7F7",
    Dark: "F1F6F4",
    Hover: "#E2F2E9",
  },

  Text: {
    Content: "#042330",
    Title: "#03314B",
    Tabs: "#6D787E",
    Search: "#747575",
  },

  GreyScale: {
    Border: "#BAC9CF",
    FooterIcon: "#6C787F",
    Reading: "#3A4649",
    BodyIcon: "#042330",
  },

  palette: {
    primary: {
      main: "#22C870",
      light: "#2CE080",
      dark: "#20BA68",
    },

    secondary: {
      main: "#0365F2",
      light: "#C6DAF6",
    },
  },

  typography: {
    fontFamily: "'Cera Pro', sans-serif",

    h1: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "36px",
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "45.25px",
      textTransform: "none",
    },

    h3: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "24px",
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "32px",
    },

    h5: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "17px",
      fontWeight: "300",
      fontStyle: "normal",
      lineHeight: "23px",
    },

    h6: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "14px",
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "22px",
    },

    subtitle1: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "18px",
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "23px",
      textTransform: "none",
    },

    subtitle2: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
      textTransform: "none",
    },

    body1: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "16px",
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "24px",
      textTransform: "none",
    },

    body2: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "21px",
      textTransform: "none",
    },

    caption: {
      fontFamily: "'Cera Pro', sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "18px",
      textTransform: "none",
    },
  },
});

export default Themes;
