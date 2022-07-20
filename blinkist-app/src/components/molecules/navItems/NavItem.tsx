import { Box,  Typography } from "@mui/material";
import React from "react";
import { Images } from "../../atoms/Images/Images";

interface NavItemPropsType {
  navName?: string;
  imageSrc?: string;
  alternative?: string;
}



export const NavItem = (props: NavItemPropsType) => {
  return (
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <div id="startIcon">
          <Images src={props.imageSrc} alt={props.alternative} />
        </div>
        <div style={{paddingLeft:12}}>
          <Typography variant="body2" sx={{ color: "#6D787E" }}>
            {props.navName}
          </Typography>
        </div>
      </Box>
  );
};
