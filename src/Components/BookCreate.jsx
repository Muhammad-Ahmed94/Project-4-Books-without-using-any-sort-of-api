import { useState } from "react";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input value={title} onChange={handleChange} autoFocus />
      </form>
    </div>
  );
}

export default BookCreate;
