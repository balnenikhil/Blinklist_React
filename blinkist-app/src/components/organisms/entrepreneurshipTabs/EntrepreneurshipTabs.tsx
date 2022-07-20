import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GetBooks from "../../../utils/GetBooks";
import { BookType } from "../bookDetailView/BookDetailView";
import { useNavigate } from "react-router-dom";
import BookCard from "../../molecules/cards/BookCard";
import { Add } from "@mui/icons-material";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { SearchTab } from "../search/SearchTab";




export const EntrepreneurshipTabs = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    GetBooks().then((bookData) => {
      setBooks(bookData ?? []);
    });
  }, []);

  const handleAddToLibrary = (book: BookType) => {
    axios.put("http://localhost:3000/books/" + book.id, {
      ...book,
      status: "currentlyReading",
      progress: 10,
    });
    navigate(`/bookDetails/${book.id}`);
  };  

  const bookRenderLibrary = (book: BookType) => {
    return (
      <BookCard
        id={book.id}
        title={book.title}
        subTitle={book.author}
        time={book.time}
        readCount={book.reads}
        progress={book.progress}
        imageSrc={window.location.origin + "/" + book.image}
        alternative={"image"}
        buttonText={"Add to library"}
        variant={"text"}
        onClick={handleAddToLibrary}
        book={book}
        startIcon={<Add />}
        cardButton={true}
        more={false}
      />
    );
  };
  
  

  const bookRenderMoreHorizon = (book: BookType) => {
    return (
      <BookCard
        id={book.id}
        title={book.title}
        subTitle={book.author}
        time={book.time}
        readCount={book.reads}
        cardButton={false}
        progress={book.progress}
        more={true}
        imageSrc={window.location.origin + "/" + book.image}
        alternative={"image"}
        buttonText={"Read again"}
        variant={"text"}
        onClick={handleAddToLibrary}
        book={book}
      />
    );
  };
  const displayBookByType = (BooksType: string) => {
    return (
      <div>
        <div>
          <Typography
            variant="h3"
            color={"#03314B"}
            sx={{ marginBottom: "1.5rem", marginTop: "4rem" }}
          >
            {BooksType}
          </Typography>
        </div>

        <Grid container rowSpacing={8} columnSpacing={5}>
          {books
            .filter((book) => book.Type === BooksType)
            .map((book) => {
              return (
                <>
                  {book.status === "" && (
                    <Grid item key={book.id}>
                      {bookRenderLibrary(book)}
                    </Grid>
                  )}

                  {(book.status === "finished" ||
                    book.status === "currentlyReading") && (
                    <Grid item key={book.id}>
                      {bookRenderMoreHorizon(book)}
                    </Grid>
                  )}
                </>
              );
            })}
        </Grid>
      </div>
    );
  };

  const handleSearch = (e: string) => {
    setSearchString(e);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "5rem",
        }}
      >
        <SearchBar onChange={(e) => handleSearch(e.target.value)} />
      </Box>
      {!searchString && displayBookByType("TrendingBlinks")}
      {!searchString && displayBookByType("Just added")}
      {!searchString && displayBookByType("FeaturedAudioBlinks")}
      {searchString && <SearchTab searchInput={searchString} />}
    </div>
  );
};
