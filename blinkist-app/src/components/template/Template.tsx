import { Box, Grid } from "@mui/material";
import React from "react";
import Footer from "../organisms/footer/Footer";
import { NavBar } from "../organisms/navbar/NavBar";

type TemplateProps ={
  bodyContent?: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = (props) => {
    const{bodyContent}=props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <NavBar />
      </Box>
      <Box mt={"3rem"} mb={"7rem"}>
        <Grid container justifyContent="center">
          <Grid item xs={7.5}>
            {bodyContent}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </Box>
  );
};
