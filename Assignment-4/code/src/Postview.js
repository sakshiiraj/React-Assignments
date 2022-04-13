import React, { useState, useEffect } from "react";
import Header from "./Post/Header";
import Post from "./Post/Post";
// import "./Postview.css";

const Postview = () => {
  const [posts, setPosts] = useState([]);

  const setPostsAsync = async () => {
    const response = await fetch("http://localhost:3004/user"),
      data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    setPostsAsync();
  }, []);

  return (
    <>
      <Header />
      <div className="Postview">
        {posts.map((post, index) => (
          <Post key={index} config={post} />
        ))}
      </div>
    </>
  );
};

export default Postview;
