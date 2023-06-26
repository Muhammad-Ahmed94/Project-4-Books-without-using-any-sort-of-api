import { useState } from "react";
import "./CreateBook.css";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="create-book">
      <h1>Add a Book</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          className="input"
          value={title}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </div>
  );
}

export default BookCreate;
