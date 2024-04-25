import TemporaryDrawer from "./drawer";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import "./styles.css";
import Button from "../Button";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-links">
          <a href="/" className="logo-a">
            <SpeedRoundedIcon />
            <h1 className="logo">CryptoMeter</h1>
          </a>
          <div className="links">
            <a href="/">
              <p className="link">Home</p>
            </a>
            <a href="/">
              <p className="link">Compare</p>
            </a>
            <a href="/">
              <p className="link">Watchlist</p>
            </a>
            <a href="/">
              <p className="link">Contact Us</p>
            </a>
          </div>
        </div>
        <div className="login-links">
          <a href="/">
            <Button text={"Dashboard"} />
          </a>
          <a href="/">
            <p className="link">Sign up</p>
          </a>
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      </nav>
    </header>
  );
}

export default Header;
