import { Spinner } from "react-bootstrap";

export const Loader = ({ loading, error, children }) => {
  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <h1>Error Loading</h1>;
  return <>{children}</>;
};
