import React, { useState } from "react";

const BookList = ({ books, deleteBook, updateBook }) => {
  const [editableBook, setEditableBook] = useState(null);

  const handleEdit = (book) => {
    setEditableBook(book);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedBook = {
      isbn: editableBook.isbn,
      title: e.target.title.value,
      author: e.target.author.value,
      year: e.target.year.value
    };
    updateBook(updatedBook);
    setEditableBook(null);
  };

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li className="book-item" key={book.isbn}>
          {editableBook && editableBook.isbn === book.isbn ? (
            <form onSubmit={handleUpdate}>
              <input type="text" name="title" defaultValue={book.title} />
              <input type="text" name="author" defaultValue={book.author} />
              <input type="text" name="year" defaultValue={book.year} />
              <button type="submit">Save</button>
            </form>
          ) : (
            <div>
              <div>
                <strong>{book.title}</strong> by {book.author}
              </div>
              <div>Year: {book.year}</div>
              <div>ISBN: {book.isbn}</div>
              <button onClick={() => handleEdit(book)}>Edit</button>
              <button onClick={() => deleteBook(book.isbn)}>Delete</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
