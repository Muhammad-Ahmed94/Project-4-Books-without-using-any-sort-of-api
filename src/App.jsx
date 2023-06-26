import { useState } from "react";
import BookCreate from "./Components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {
    console.log("Create book with title of: ", title);
  };

  return (
    <div>
      <BookCreate onCreate={handleCreate} />
    </div>
  );
}

export default App;
