/* eslint-disable react/prop-types */
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import { blue } from "@mui/material/colors";

function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchIcon sx={{ color: blue[500] }} />
      <input
        placeholder="Search Crypto..."
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}

export default Search;
