import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <Link className="text-decoration-none" to="/post/124587">
      <div className="shadow p-3 mb-4 bg-white rounded">
        <h5 className="text-muted">
          Add or remove shadows to elements with box-shadow utilities.
        </h5>
        <div className="text-secondary pt-1">30/12/2021</div>
      </div>
    </Link>
  );
};

export default PostCard;
