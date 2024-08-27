import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import { LibraryProvider } from "./LibraryContext";

function App() {
  return (
    <LibraryProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
          </Routes>
        </div>
      </Router>
    </LibraryProvider>
  );
}

export default App;
