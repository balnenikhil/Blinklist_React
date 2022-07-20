import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Lists2 from "../../molecules/lists/Lists";
import logo from "../../../assets/footerLogo.png";
import { footerText } from "../../../utils/Constants";

const useStyles = makeStyles({
  MainBox: {
    width: "100%",
    backgroundColor: "#F1F6F4",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingTop: "2rem",
  },

  SubBox: {
    display: "flex",
    backgroundColor: "#F1F6F4",
    flexDirection: "column",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },

  DivBox: {
    display: "flex",
    backgroundColor: "#F1F6F4",
    justifyContent: "space-between",
    margin: 5,
    flexWrap: "wrap",
  },
});

const SideData = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingRight: "32px",
        flexWrap: "wrap",
        height: "7.5rem",
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{ width: "99.1px", paddingTop: "8px" }}
      />
      <Typography variant="h3" sx={{ color: "#0365F2" }}>
        {footerText[0]} <br /> {footerText[1]}
      </Typography>
    </div>
);

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.MainBox}>
      <Box className={classes.SubBox}>
        <div className={classes.DivBox}>
          <SideData />
          <Lists2 />
        </div>
        <Typography variant="caption" color={"#6D787E"} paddingBottom="38px">
          {footerText[2]}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
