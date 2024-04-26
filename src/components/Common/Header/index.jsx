import TemporaryDrawer from "./drawer";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import "./styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-links">
          <Link to="/" className="logo-a">
            <SpeedRoundedIcon />
            <h1 className="logo">CryptoMeter</h1>
          </Link>
          <div className="links">
            <Link to="/">
              <p className="link">Home</p>
            </Link>
            <Link to="/">
              <p className="link">Compare</p>
            </Link>
            <Link to="/">
              <p className="link">Watchlist</p>
            </Link>
            <Link to="/">
              <p className="link">Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="login-links">
          <Link to="/dashboard">
            <Button text={"Dashboard"} />
          </Link>
          <Link to="/">
            <p className="link">Sign up</p>
          </Link>
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      </nav>
    </header>
  );
}

export default Header;
