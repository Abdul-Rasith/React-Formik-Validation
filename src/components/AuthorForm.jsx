import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AuthorForm = ({ addAuthor, editAuthor, selectedAuthor }) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedAuthor) {
      formik.setValues(selectedAuthor);
      setIsEditing(true);
    }
  }, [selectedAuthor]);

  const formik = useFormik({
    initialValues: {
      name: "",
      birthDate: "",
      biography: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      birthDate: Yup.date().required("Birth Date is required"),
      biography: Yup.string().required("Biography is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (isEditing) {
        editAuthor(values);
      } else {
        addAuthor({ ...values, id: Date.now() });
      }
      resetForm();
      setIsEditing(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Birth Date</label>
        <input
          type="date"
          className="form-control"
          name="birthDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birthDate}
        />
        {formik.touched.birthDate && formik.errors.birthDate ? (
          <div className="text-danger">{formik.errors.birthDate}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Biography</label>
        <textarea
          className="form-control"
          name="biography"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.biography}
        />
        {formik.touched.biography && formik.errors.biography ? (
          <div className="text-danger">{formik.errors.biography}</div>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        {isEditing ? "Update Author" : "Add Author"}
      </button>
    </form>
  );
};

export default AuthorForm;
