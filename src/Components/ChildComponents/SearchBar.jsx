import { Box } from "@mui/material";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { sliceActions } from "../../Store/StoreSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchFilteration = (e) => {
    const search_item = e.target.value;
    console.log(search_item);
    dispatch(sliceActions.SearchBarTerm(search_item));
  };
  return (
    <>
      <Box className={classes.searchBar}>
        <input type="search" onChange={searchFilteration} />
        <SearchIcon className={classes.icn} />
      </Box>
    </>
  );
};

export default SearchBar;
