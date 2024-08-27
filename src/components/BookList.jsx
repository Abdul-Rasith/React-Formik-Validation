import React from "react";

const BookList = ({ books, deleteBook, editBook }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Publication Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.publicationDate}</td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => editBook(book)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
