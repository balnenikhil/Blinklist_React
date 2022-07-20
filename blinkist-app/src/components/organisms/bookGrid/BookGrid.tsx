import {  Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GetBooks from "../../../utils/GetBooks";
import BookCard from "../../molecules/cards/BookCard";


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

interface BookGridPropsType {
  tab?: string;
}

export const BookGrid = (props: BookGridPropsType) => {
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    GetBooks().then((bookData) => {
      setBooks(bookData ?? []);
    });
  }, []);

   const updateBooks = (id: number, status?: string, progress?: number) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        book.status = status;
        book.progress = progress;
      }
      return book;
    });
    setBooks(updatedBooks);
  };

   const handleFinish = (book: BookType) => {
    axios
      .put("http://localhost:3000/Books/" + book.id, {
        ...book,
        status: "finished",
        progress: 100,
      })
      .then((response) => response.data)
      .then((book1) => {
        updateBooks(book1.id, "finished", 100);
      });
  };

   const handleReadAgain = (book: BookType) => {
    axios
      .put("http://localhost:3000/Books/" + book.id, {
        ...book,
        status: "currentlyReading",
        progress: 30,
      })
      .then((response) => response.data)
      .then((book2) => {
        updateBooks(book2.id, "currentlyReading", 30);
      });
  };

  const bookRenderFinish = (book: BookType) => {
    return (
      <div>
        <BookCard
          id={book.id}
          title={book.title}
          subTitle={book.author}
          time={book.time}
          readCount={book.reads}
          progress={book.progress}
          imageSrc={window.location.origin + "/" + book.image}
          alternative={"image"}
          buttonText={"Finished"}
          variant={"text"}
          onClick={handleFinish}
          book={book}
          more={false}
          cardButton={true}
        />
      </div>
    );
  };

  const bookRenderReadAgain = (book: BookType) => {
    return (
      <BookCard
        id={book.id}
        title={book.title}
        subTitle={book.author}
        time={book.time}
        readCount={book.reads}
        cardButton={true}
        progress={book.progress}
        more={false}
        imageSrc={window.location.origin + "/" + book.image}
        alternative={"image"}
        buttonText={"Read again"}
        variant={"text"}
        onClick={handleReadAgain}
        book={book}
      />
    );
  };

  return (
      <Grid container rowSpacing={8} columnSpacing={5} sx={{ marginLeft:"-64px"}}>
        {books.map((book) => {
          return (
            <>
              {props.tab === "currentlyReading" &&
                book.status === "currentlyReading" && (
                  <Grid item key={book.id}>
                    {bookRenderFinish(book)}
                  </Grid>
                )}

              {props.tab === "finished" && book.status === "finished" && (
                <Grid item key={book.id}>
                  {bookRenderReadAgain(book)}
                </Grid>
              )}
            </>
          );
        })}
      </Grid>
  );
};
