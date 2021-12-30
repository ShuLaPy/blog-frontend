import "./App.css";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

function App() {
  return (
    <div className="App">
      <div className="container mb-4 mt-4 d-flex justify-content-end">
        <Link to="/create-post">
          <button type="button" className="btn btn-primary btn-lg">
            + Create Post
          </button>
        </Link>
      </div>

      <div className="container">
        <h2 className="mb-3">All Posts</h2>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default App;
