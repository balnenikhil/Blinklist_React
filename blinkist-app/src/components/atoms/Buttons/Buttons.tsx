import React from "react";
import Button from "@mui/material/Button";
import { styled, Typography } from "@mui/material";
import { BookType } from "../../organisms/bookGrid/BookGrid";

interface ButtonPropsType{
  variant: "contained" | "text" | "outlined" | undefined;
  color?: "primary" | "inherit" | "secondary";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: string | React.ReactNode;
  onClick: (book: BookType) => void;
  book: BookType;
}

const CardButtons = styled(Button)({
  borderTopRightRadius: "0px",
  borderTopLeftRadius: "0px",
  background: "white",
  color: "#0365F2",
  "&:hover": {
    color: "white",
    background: "#0365F2",
  },
  "& Typography": {
    color: "white",
  },
});

export const Buttons = (props: ButtonPropsType) => {
  return (
    <CardButtons
      variant={props.variant}
      endIcon={props.endIcon}
      startIcon={props.startIcon}
      color={props.color}
      sx={{ height: "52px", width:"284px"}}
      style={{ fontFamily: "'Cera Pro', sans-serif", textTransform: "none" }}
      onClick = {()=>props.onClick(props.book)}
    >
      <Typography variant="body2">{props.children}</Typography>
    </CardButtons>
  );
};
