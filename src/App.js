import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import AddBookModal from "./components/AddBookModal";

function App() {
  const bookList = [
    {
      name: "Inferno",
      author: "Dan Brown",
      status: "Completed",
    },
    {
      name: "The Kite Runner",
      author: "Khaled Hosseini",
      status: "TBR",
    },
  ];

  let [myBookList, setMyBookList] = useState(bookList);
  let [listSize, setListSize] = useState(bookList.length);

  const addBookToList = (name, author, status) => {
    let newBookList = [...myBookList];
    newBookList.push({ name, author, status });
    setMyBookList(newBookList);
    setListSize(listSize + 1);
  };

  const changeReadStatus = (index, readStatus) => {
    let newBookList = [...myBookList];
    newBookList[index].status = readStatus;
    setMyBookList(newBookList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <BookList bookList={myBookList} changeReadStatus={changeReadStatus} />
        <AddBookModal addBookToList={addBookToList} />
      </main>
      <Footer totalBooks={listSize} />
    </>
  );
}

export default App;
