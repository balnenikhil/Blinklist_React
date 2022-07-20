import axios from "axios";

const GetBooks = async () => {
  let books;
  await axios.get("http://localhost:3000/books")
    .then((response) => {
      books = response.data;
    });
  return books;
};

export default GetBooks;
