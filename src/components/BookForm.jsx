import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookForm = ({ addBook, editBook, selectedBook }) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedBook) {
      formik.setValues(selectedBook);
      setIsEditing(true);
    }
  }, [selectedBook]);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      publicationDate: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      author: Yup.string().required("Author is required"),
      isbn: Yup.string().required("ISBN is required"),
      publicationDate: Yup.date().required("Publication Date is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (isEditing) {
        editBook(values);
      } else {
        addBook({ ...values, id: Date.now() });
      }
      resetForm();
      setIsEditing(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-danger">{formik.errors.title}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author ? (
          <div className="text-danger">{formik.errors.author}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>ISBN</label>
        <input
          type="text"
          className="form-control"
          name="isbn"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isbn}
        />
        {formik.touched.isbn && formik.errors.isbn ? (
          <div className="text-danger">{formik.errors.isbn}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Publication Date</label>
        <input
          type="date"
          className="form-control"
          name="publicationDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.publicationDate}
        />
        {formik.touched.publicationDate && formik.errors.publicationDate ? (
          <div className="text-danger">{formik.errors.publicationDate}</div>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        {isEditing ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
};

export default BookForm;
