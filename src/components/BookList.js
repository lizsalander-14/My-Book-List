import React from "react";
import Book from "./Book";

export default function BookList(props) {
  return props.bookList.map((book, i) => {
    return (
      <Book
        key={i}
        book={book}
        index={i}
        changeReadStatus={props.changeReadStatus}
      />
    );
  });
}
