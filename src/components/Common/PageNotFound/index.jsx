import "./styles.css";
import ErrorImg from "../../../assets/404-error.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <img src={ErrorImg} className="page-not-found-error" />
      <Link to="/">
        <Button variant="contained">Home Page</Button>
      </Link>
    </div>
  );
}

export default PageNotFound;
