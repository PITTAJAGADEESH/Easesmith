import { useParams } from "react-router-dom";
import "./index.css";

const ThankYou = () => {
  const { name } = useParams();

  return (
    <div className="m-container">
      <h1 className="wishing-header" aria-live="polite">
        Thank you for your interest in{" "}
        <span className="highlighted-name">{name}</span>!
      </h1>
    </div>
  );
};

export default ThankYou;
