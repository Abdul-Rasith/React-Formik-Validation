import React, { useContext, useState } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { LibraryContext } from "../LibraryContext";

function Books() {
  const { books, addBook, editBook, deleteBook } = useContext(LibraryContext);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEditBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="container">
      <h2>Manage Books</h2>
      <BookForm
        addBook={addBook}
        editBook={editBook}
        selectedBook={selectedBook}
      />
      <BookList
        books={books}
        deleteBook={deleteBook}
        editBook={handleEditBook}
      />
    </div>
  );
}

export default Books;
