import "./index.css";
import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onCreate={handleCreate} />
      <BookList books={books} />
    </div>
  );
}

export default App;
