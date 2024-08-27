import React, { useContext, useState } from "react";
import AuthorList from "../components/AuthorList";
import AuthorForm from "../components/AuthorForm";
import { LibraryContext } from "../LibraryContext";

function Authors() {
  const { authors, addAuthor, editAuthor, deleteAuthor } =
    useContext(LibraryContext);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleEditAuthor = (author) => {
    setSelectedAuthor(author);
  };

  return (
    <div className="container">
      <h2>Manage Authors</h2>
      <AuthorForm
        addAuthor={addAuthor}
        editAuthor={editAuthor}
        selectedAuthor={selectedAuthor}
      />
      <AuthorList
        authors={authors}
        deleteAuthor={deleteAuthor}
        editAuthor={handleEditAuthor}
      />
    </div>
  );
}

export default Authors;
