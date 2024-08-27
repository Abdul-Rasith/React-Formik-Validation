import React from "react";

const AuthorList = ({ authors, deleteAuthor, editAuthor }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Biography</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author, index) => (
          <tr key={index}>
            <td>{author.name}</td>
            <td>{author.birthDate}</td>
            <td>{author.biography}</td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => editAuthor(author)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteAuthor(author.id)}
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

export default AuthorList;
