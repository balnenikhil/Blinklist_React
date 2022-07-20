import React from "react";
import { useParams } from "react-router-dom";
import { BookDetailView } from "../../organisms/bookDetailView/BookDetailView";
import { Template } from "../../template/Template";

export const BookView = () => {
  const { id } = useParams();
  return (
    <div>
      <Template bodyContent={<BookDetailView id={id} />}></Template>
    </div>
  );
};
