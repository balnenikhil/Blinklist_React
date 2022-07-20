import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Images } from "../../atoms/Images/Images";
import BookTabs from "../../atoms/Tabs/Tabs";
import { bookPageHeading, buttonText } from "../../../utils/Constants";

export type BookType = {
  id?: number;
  title?: string;
  author?: string;
  time?: string;
  reads?: string;
  image: string | undefined;
  status?: string;
  progress?: number;
  category?: string;
  Type?: string;
};


export const BookDetailView: React.FC<{ id: string | undefined }> = (props) => {
  const { id } = props;
  const [book, setBook] = useState<BookType>({
    id: 10,
    title: "Bring your Human to work",
    author: "Erica Keswin",
    time: "13",
    reads: "",
    image: "3.png",
    status: "",
    progress: 0,
    category: "Entrepreneurship",
    Type: "FeaturedAudioBlinks",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/books/" + id)
      .then((response) => response.data)
      .then((book1) => {
        setBook(book1);
      });
  }, [id]);

  const handleFinish = (finishBook: BookType) => {
    axios
      .put("http://localhost:3000/Books/" + finishBook.id, {
        ...book,
        status: "finished",
        progress: 100,
      })
      .then((response) => response.data);
  };

  const handleReadNow = (ReadBook: BookType) => {
    axios
      .put("http://localhost:3000/Books/" + ReadBook.id, {
        ...book,
        status: "currentlyReading",
        progress: 30,
      })
      .then((response) => response.data);
  };
  return (
    <div>
      <Box mb={"40px"}>
        <Typography variant="body2" color={"#03314B"} mb={"24px"}>
          Get the key ideas from
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h1" color={"#03314B"} mb={"24px"}>
              {book?.title}
            </Typography>
            <Typography variant="h5" color={"#03314B"} mb={"24px"}>
              {bookPageHeading}
            </Typography>
            <Typography variant="body2" color={"#6D787E"} mb={"24px"}>
              by {book?.author}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }} mb={"5rem"}>
              <AccessTimeIcon sx={{ paddingRight: "2px" }} />
              <Typography variant="body2" color={"#6D787E"}>
                {book?.time}-minute read
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid #042330",
                  color: "#22C870",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginRight: "1.5rem",
                }}
                onClick={() => handleReadNow(book)}
              >
                {buttonText[0]}
              </Button>
              <Button
                variant="contained"
                onClick={() => handleFinish(book)}
                sx={{
                  background: "#2CE080",
                  color: "#03314B",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginRight: "1.5rem",
                  "&:hover": { background: "#00C263" },
                }}
              >
                {buttonText[1]}
              </Button>
              <Button
                variant="text"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: "#6D787E",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginRight: "1.5rem",
                }}
              >
                {buttonText[2]}
              </Button>
              <Box mt={"4rem"}>
                <BookTabs />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Images
              src={window.location.origin + "/" + book.image}
              alt="book image"
            ></Images>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
