import React, { useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John",
      content: "https://picsum.photos/600",
      type: "image",
    },
    {
      id: 2,
      author: "Bob",
      content: "https://www.w3schools.com/html/mov_bbb.mp4",
      type: "video",
    },
    {
      id: 3,
      author: "Dev",
      content: "https://picsum.photos/200",
      type: "image",
    },
    {
      id: 4,
      author: "Pritham",
      content: "https://picsum.photos/300",
      type: "image",
    },
    {
      id: 5,
      author: "Jock",
      content: "https://picsum.photos/400",
      type: "image",
    },
    {
      id: 6,
      author: "Roshan",
      content: "https://picsum.photos/500",
      type: "image",
    },
    {
      id: 7,
      author: "Venky",
      content: "https://picsum.photos/100",
      type: "image",
    },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([{ ...newPost, id: Date.now() }, ...posts]);
  };

  return (
  <div className="home-wrapper">
    <Header onAddPost={handleAddPost} />
    <div className="home-container">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  </div>
);
};

export default Home;
