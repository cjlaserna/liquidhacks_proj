import { Image } from "react-bootstrap";

export const Loader = ({ loading, error, children }) => {
  if (loading)
    return (
      <Image
        src="https://c.tenor.com/Hb_1tdjj6UYAAAAi/lets-go-liquid-blue.gif"
        alt="dance"
      />
    );
  if (error) return <h1>Error Loading</h1>;
  return <>{children}</>;
};
