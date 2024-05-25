import "./styles.css";
import { Link } from "react-router-dom";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import { green } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";

function Footer() {
  return (
    <>
      <div className="footer-div">
        <div className="site-logo">
          <Link to="/" className="logo-a ">
            <SpeedRoundedIcon sx={{ color: green[400], fontSize: "1.8rem" }} />
            <h1 className="logo footer-logo">CryptoMeter</h1>
          </Link>
        </div>
        <div className="footer-links">
          <p className="footer-link-heading">Links</p>
          <div className="links footer">
            <Link to="/">
              <p className="link footer-link">Home</p>
            </Link>
            <Link to="/">
              <p className="link footer-link">Compare</p>
            </Link>
            <Link to="/">
              <p className="link footer-link">Watchlist</p>
            </Link>
            <Link to="/">
              <p className="link footer-link">Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="get-in-touch">
          <p className="footer-socials">Get In Touch</p>
          <div>
            <FacebookIcon />
            <XIcon />
            <LinkedInIcon />
          </div>
          <Button variant="outlined">Subscribe</Button>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; ; Developed By Shantanu </p>
      </div>
    </>
  );
}

export default Footer;
