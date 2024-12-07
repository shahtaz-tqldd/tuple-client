import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="h-screen w-screen center">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>
        Go Back to <Link to="/">Homepage</Link>
      </p>
    </section>
  );
};

export default ErrorPage;
