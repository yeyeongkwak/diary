import axios from "axios";
import React, { useState, useEffect } from "react";

const Posts = ({ currentPosts }) => {
  return (
    <div>
      {currentPosts.map((post) => (
        <div key={post.id}>
          <li>
            {post.id} -{post.title}
            {currentPosts.id}
          </li>
        </div>
      ))}
    </div>
  );
};

export default Posts;
