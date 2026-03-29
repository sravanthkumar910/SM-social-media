import React, { useState } from "react";
import "./AddPost.css";

const AddPost = ({ onAdd }) => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      if (selected.type.startsWith("image")) setType("image");
      else if (selected.type.startsWith("video")) setType("video");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caption && file) {
      const url = URL.createObjectURL(file); // Temporary URL
      onAdd({ author: "You", content: url, type, likes: 0, comments: [] });
      setCaption("");
      setFile(null);
      setType("");
    }
  };

  return (
    <form className="add-post" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      <button type="submit">Post</button>
    </form>
  );
};

export default AddPost;
