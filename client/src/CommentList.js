import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
  //   const [comments, setComments] = useState([]);

  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `http://localhost:4001/posts/${postId}/comments`
  //     );

  //     setComments(res.data);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const renderedComments = comments.map((comment) => {
    let content;
    comment.status === "approved"
      ? (content = comment.content)
      : comment.status === "rejected"
      ? (content = "This comment has been rejected")
      : (content = "This comment is pending");

    comment.content = content;

    return <li key={comment.id}> {comment.content} </li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
