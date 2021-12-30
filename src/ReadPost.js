import React from "react";
import { useParams } from "react-router-dom";

const ReadPost = () => {
  let params = useParams();

  return <div>Read Post {params.postId}</div>;
};

export default ReadPost;
