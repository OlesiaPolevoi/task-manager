import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="container">
      <h1>The page was not found</h1>
      <Link to="/">Return to Home page</Link>
    </div>
  );
};
