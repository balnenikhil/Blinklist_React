import { Box, InputAdornment, InputProps, TextField } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { makeStyles } from "@mui/styles";

interface SearchBarPropsType extends InputProps{
  searchInput?:string;
}

const useStyles = makeStyles({
  Adornment:{
    marginLeft: "0px",
    paddingLeft: "0px",
    marginRight: "27px",
  },
  search:{
    width: "23.7px",
    height: "23.7px",
    paddingLeft: "0px",
    marginLeft: "0px",
  }
})

export const SearchBar = (props:SearchBarPropsType) => {
  const classes = useStyles();
  return (
    <Box sx={{display: "flex", justifyContent:"flex-start"}}>
    <div style={{  margin: "58px auto 0px auto" }}>
      <TextField
        color="primary"
        variant="filled"
        placeholder="Search by title or author"
        onChange={props.onChange}
        InputProps={{
          style: {
            backgroundColor: "white",
            border: "none",
            fontSize: "24px",
            lineHeight: "30.17px",
            fontWeight: "700",
            width: "700px",
            height: "46px",
            paddingBottom: "16px",
            paddingLeft: "0px",
          },
          startAdornment: (
            <InputAdornment
              position="start"
              className={classes.Adornment}
            >
              <SearchOutlinedIcon
               className={classes.search}
              />
            </InputAdornment>
          ),
        }}
        sx={{ display: "flex" }}
      ></TextField>
    </div>
    </Box>
  );
};
