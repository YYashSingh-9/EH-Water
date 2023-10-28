import { Grid, Box, Divider } from "@mui/material";
import classes from "./WorldIssuesComponent.module.css";
import SearchBar from "../ChildComponents/SearchBar";
import IssueThreadComponent from "../ChildComponents/IssueThreadCompnent";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../../Store/StoreSlice";
import { useEffect } from "react";

const WorldIssuesComponent = () => {
  const allIssuesArray = useSelector((state) => state.firstSlice.allIssues);
  const searchTerm = useSelector((state) => state.firstSlice.searchTerm);

  const loaderData = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sliceActions.get_token_from_localStorage());
    if (loaderData) {
      if (loaderData.status === "success") {
        dispatch(sliceActions.gettingAllIssues(loaderData.data));
      }
    }
  }, [loaderData]);

  let searchedArray = allIssuesArray;
  if (searchTerm) {
    searchedArray = allIssuesArray.filter((el) =>
      el.title.includes(searchTerm)
    );
  }
  console.log(searchedArray);
  console.log(searchTerm);
  // const finalArray = searchedArray.length > 1 ? searchedArray : allIssuesArray;
  // console.log(finalArray);
  return (
    <>
      <Box className={classes.issueCompParent}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item lg={12} md={12} sm={12} xs={12} textAlign={"center"}>
            <h2>World Issues</h2>
            <SearchBar />
            <Divider sx={{ marginTop: "0.5rem" }} />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} textAlign={"center"}>
            <Box className={classes.issueParent}>
              {searchedArray.map((el) => {
                return <IssueThreadComponent elem={el} key={el._id} />;
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WorldIssuesComponent;
