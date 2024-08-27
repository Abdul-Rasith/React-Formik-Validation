import React, { createContext, useState } from "react";

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const editAuthor = (updatedAuthor) => {
    setAuthors(
      authors.map((author) =>
        author.id === updatedAuthor.id ? updatedAuthor : author
      )
    );
  };

  const deleteAuthor = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return (
    <LibraryContext.Provider
      value={{
        books,
        addBook,
        editBook,
        deleteBook,
        authors,
        addAuthor,
        editAuthor,
        deleteAuthor,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
