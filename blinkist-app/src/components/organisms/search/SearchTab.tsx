import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GetBooks from "../../../utils/GetBooks";
import BookCard from "../../molecules/cards/BookCard";
import { BookType } from "../bookGrid/BookGrid";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface SearchTabProps {
  searchInput: string;
}

export const SearchTab = (props: SearchTabProps) => {

  const [books, setBooks] = useState<BookType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetBooks().then((bookData) => {
      setBooks(bookData ?? []);
    });
  }, []);

  const handleAddToLibrary = (book: BookType) => {
    navigate(`/bookDetails/${book.id}`);
    axios.put("http://localhost:8000/books/" + book.id, {
      ...book,
      status: "currentlyReading",
      progress: 10,
    });
  };

  const bookRenderLibrary = (book: BookType) => {
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
        buttonText={"Add to library"}
        variant={"text"}
        onClick={handleAddToLibrary}
        book={book}
        startIcon={<Add />}
      />
    );
  };

  return (
      <Grid container rowSpacing={8} columnSpacing={5}>
        {books.map((book) => {
            if((book.title ?? "").toLowerCase().indexOf(props.searchInput.toLowerCase()) >= 0 ||(book.author?.toLowerCase() ?? "").indexOf(props.searchInput.toLowerCase()) >= 0){
                return <Grid item key={book.id}>{bookRenderLibrary(book)}</Grid>
            }
             return <div></div>
        })}
      </Grid>
  );
};
