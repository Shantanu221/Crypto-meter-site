import "./styles.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function BackToTop() {
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 330 ||
      document.documentElement.scrollTop > 330
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="back-to-top-btn" id="myBtn" onClick={() => topFunction()}>
      <ArrowDropUpIcon style={{ color: "var(--blue)" }} fontSize="large" />
    </div>
  );
}

export default BackToTop;
