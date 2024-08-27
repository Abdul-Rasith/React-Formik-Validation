import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Library Management Dashboard</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action bg-primary text-white text-center py-3 mb-3"
              to="/books"
            >
              Manage Books
            </Link>
            <Link
              className="list-group-item list-group-item-action bg-success text-white text-center py-3"
              to="/authors"
            >
              Manage Authors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
