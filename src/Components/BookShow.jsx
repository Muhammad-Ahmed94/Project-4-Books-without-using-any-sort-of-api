import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete }) {
  const [editBook, setEditBook] = useState(false);

  const handleDeleteBook = () => {
    onDelete(book.id);
  };

  const handleEditBook = () => {
    setEditBook(!editBook);
  };

  let booktitle = <h3>{book.title}</h3>;
  if (editBook) {
    booktitle = <BookEdit book={book} />;
  }

  return (
    <div className="book-show">
      {booktitle}
      <div className="actions">
        <button onClick={handleEditBook}>Edit</button>
        <button className="delete" onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
