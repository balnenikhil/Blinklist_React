import { Box, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import Themes from "../../../Themes/Themes";
import { Images } from "../../atoms/Images/Images";

interface BannerPropsType {
  heading: string;
  subtitle: string;
  imageSrc: string;
  alternative: string;
}



export const Banner = (props: BannerPropsType) => {
  return (
    <ThemeProvider theme={Themes}>
      <Box
        sx={{
          backgroundColor: "#F1F6F4",
          display: "flex",
          
          marginRight:"5rem"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              backgroundColor: "background.Dark",
              width: 319,
              height: 90,
              textAlign: "left",
            }}
            pt={"45px"}
            pb={"15px"}
            pl={"45px"}
          >
            <Typography variant="h1">{props.heading}</Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "background.Dark",
              width: 461,
              height: 69,
              textAlign: "left",
            }}
            pb={"15px"}
            pl={"45px"}
          >
            <Typography variant="subtitle2">{props.subtitle}</Typography>
          </Box>
        </Box>
        <Box
          sx={{ backgroundColor: "background.Dark", alignContent:"flex-end", justifyContent:"flex-end" }}
          ml={"260px"}
          mb={"17px"}
          mt={"17px"}
        >
          <Images src={props.imageSrc} alt={props.alternative} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
