import {
  Box,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";

import React from "react";
import { Images } from "../../atoms/Images/Images";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Buttons } from "../../atoms/Buttons/Buttons";
import ProgressBars from "../../atoms/ProgressBars/ProgressBars";
import { BookType } from "../../organisms/bookGrid/BookGrid";

interface BookcardPropsType {
  onClick: (book: BookType) => void;
  id?: number;
  title?: string;
  subTitle?: string;
  time?: string;
  readCount?: string;
  cardButton?: boolean;
  progress?: number;
  more?: boolean;
  imageSrc: string | undefined;
  alternative: string;
  buttonText: string;
  variant: "contained" | "text" | "outlined" | undefined;
  startIcon?: React.ReactNode;
  book: BookType;
}

const IconBox = styled("div")({
  paddingTop: "17px",
  paddingBottom: "10px",
  display: "inline-flex",
  justifyContent: "space-between",
});


const BookCard = (props: BookcardPropsType) => {
  return (
    <Box
      sx={{
        width: 284,
        height: 466,
        textAlign: "left",
      }}
    >
      <Card
        sx={{ borderRadius: "8px", "&:hover": { background: "#F1F6F4" } }}
        elevation={3} 
      >
        <CardMedia>
          <Images src={props.imageSrc} alt={props.alternative} />
        </CardMedia>
        <CardContent
          sx={{
            paddingTop: "23px",
            paddingLeft: "16px",
            paddingRight: "0px",
            paddingBottom: "0px",
          }}
        >
          <Box sx={{ paddingTop: "7px" }}>
            <Typography variant="subtitle1" color={"#03314B"}>
              {props.title}
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "16px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {props.subTitle}
            </Typography>
          </Box>
          <IconBox>
            <span>
              <Images src="Time.svg" alt="time icon"></Images>
            </span>
            <span>
              <Typography variant="caption" color={"#6D787E"} pl={"6px"}>
                {props.time}-minute read
              </Typography>
            </span>
            {props.readCount && (
              <>
                <Box pl={"49.33px"} pr={"7.33px"}>
                  <Images src="Person.svg" alt="time icon"></Images>
                </Box>
                <span>
                  <Typography variant="caption" color={"#6D787E"}>
                    {props.readCount} reads
                  </Typography>
                </span>
              </>
            )}
          </IconBox>
        </CardContent>
        {props.more && (
          <Box pl={"223px"} pb={"15px"} textAlign="left">
            <MoreHorizIcon fontSize="large" />
          </Box>
        )}
        {props.cardButton && (
          <Buttons
            variant={props.variant}
            startIcon={props.startIcon}
            onClick={props.onClick}
            book={props.book}
          >
            {props.buttonText}
          </Buttons>
        )}
        <ProgressBars progressValue={props.progress} />
      </Card>
    </Box>
  );
};

export default BookCard;
