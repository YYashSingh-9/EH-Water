import { Box } from "@mui/material";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <>
      <Box className={classes.searchBar}>
        <input type="search" />
        <SearchIcon />
      </Box>
    </>
  );
};

export default SearchBar;
