import { useState } from "react";
import BookCreate from "./Components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: 123,
        title,
      },
    ];
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={handleCreate} />
    </div>
  );
}

export default App;
