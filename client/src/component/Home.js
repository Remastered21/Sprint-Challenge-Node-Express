import React from "react";
import { Link } from "react-router-dom";

import ProjectList from "./Projects/ProjectList";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the front page</h1>
      <div>
        <Link to="/api/projects" component={ProjectList}>
          <button>Click here to see the projects</button>
        </Link>

        <Link to="/api/actions" component={ProjectList}>
          <button>Click here to see the actions in progress</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
