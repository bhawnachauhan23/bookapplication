import "./styles.css";
import React, { useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const updateBook = (updatedBook) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.isbn === updatedBook.isbn ? updatedBook : book
      );
      return updatedBooks;
    });
  };

  return (
    <div className="App">
      <h1>Book Application</h1>
      <BookForm addBook={addBook} />
      <h2>Book List</h2>
      {books.length > 0 ? (
        <BookList
          books={books}
          deleteBook={deleteBook}
          updateBook={updateBook}
        />
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default App;
