/* eslint-disable react/prop-types */
import { grey } from "@mui/material/colors";
import "./styles.css";
import PublicIcon from "@mui/icons-material/Public";
import ArticleIcon from "@mui/icons-material/Article";

function CoinInfo({ data }) {
  return (
    <div className="about-coin-container">
      <div className="about-div">
        <p>About</p>
        <div>
          <p dangerouslySetInnerHTML={{ __html: data?.description?.en }} />
        </div>
      </div>
      <div className="socials-div">
        <p>Project Links</p>
        <div className="website-whitepaper-div">
          <div className="website-and-whitepaper">
            <div>
              <PublicIcon fontSize="small" sx={{ color: grey[400] }} />
              <p>Website</p>
            </div>
            {data?.links.homepage[0] ? (
              <a href={data?.links.homepage[0]}>
                {data?.links.homepage[0].slice(8, 20)}...
              </a>
            ) : (
              <p style={{ margin: 0 }}>--</p>
            )}
          </div>
          <div className="website-and-whitepaper">
            <div>
              <ArticleIcon fontSize="small" sx={{ color: grey[400] }} />
              <p>Documents</p>
            </div>
            {data?.links.whitepaper ? (
              <a href={data?.links.whitepaper}>Whitepaper</a>
            ) : (
              <p style={{ margin: 0 }}>--</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
